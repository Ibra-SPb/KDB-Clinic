const router = require('express').Router();
const { Visit, Doctor, Service, Service_Doctor } = require('../db/models');

router.get('/visit', async (req, res) => {
  try {
    const visits = await Visit.findAll(
      {
        include: [
          { model: Doctor, as: 'doctor' },
          { model: Service, as: 'service' }
        ]
      }
    );
    res.status(200).json(visits);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/table', async (req, res) => {
  try {
    const visits = await Service_Doctor.findAll(
      {
        include: [
          { model: Doctor, as: 'doctor' },
          { model: Service, as: 'service' }
        ]
      }
    );
    res.status(200).json(visits);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { service, doctor } = req.body;
    // console.log(service, doctor)
    // const visit = await Visit.findAll()
    const time = ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00']
    const date = new Date()
    let arrDate = [date]
    for (let i = 1; i < 14; i++) {
      arrDate.push(new Date(date.getFullYear(), date.getMonth(), date.getDate() + i))
    }


    res.status(200).json({ arrDate, time })

  } catch ({ message }) {
    res.status(500).json(message);
  }
})

module.exports = router;