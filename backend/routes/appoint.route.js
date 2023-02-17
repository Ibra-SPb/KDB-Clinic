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

router.post('/', async (req, res) => { })

module.exports = router;