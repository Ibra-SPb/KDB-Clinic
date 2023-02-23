const router = require('express').Router();
const { Service } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const service = await Service.findAll({ raw: true });
    res.json({ service });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
