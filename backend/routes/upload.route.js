const router = require('express').Router();
const path = require('path');
const { File, User } = require('../db/models');

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fileArray = Array.isArray(req.files.saveDoc)
      ? req.files.saveDoc
      : [req.files.saveDoc];
    const newArr = fileArray.map((ph) => {
      const fileSize = ph.size;
      const extension = path.extname(ph.name);
      const allowedExtensions =
        /.txt|.pdf|.doc|.xls|.png|.jpg|.jpeg|.gif|.tiff|tif/;
      if (!allowedExtensions.test(extension)) {
        return 'Unsupported extension!';
      }
      if (fileSize > 5000000) {
        return 'File must be at least 5 Mb';
      }
      const { md5 } = ph;

      const URL = `results/${md5}${extension}`;
      ph.mv(`./public/${URL}`, (error) => {
        if (error) {
          return res.status(500).send(error);
        }
        return URL;
      });
      return URL;
    });
    const newResult = await File.create({
      userId: id,
      path: newArr[0],
    });

    res.json({ message: 'success', newArr });
  } catch (error) {
    console.log(error.message);
    res.status(500).json();
  }
});

router.get('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const user = await User.findByPk(Number(userId));
    const userResults = await File.findAll({
      include: [User],
      raw: true,
      order: [['createdAt', 'DESC']],
    });
    res.status(200).json(userResults);
  } catch (error) {
    request.status(500).json();
  }
});

module.exports = router;
