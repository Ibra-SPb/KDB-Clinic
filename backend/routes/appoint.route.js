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
    let visits = await Visit.findAll(
      {
        include: [
          { model: Doctor, as: 'doctor' },
          { model: Service, as: 'service' }
        ]
      }
    );
    const time = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00']
    const date = new Date()
    let arrDate = [];
    let arrCheck = [];

    for (let i = 1; i <= 7; i++) {
      arrDate.push({ date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + i), time: time })
    }

    visits.filter((vs) => vs.doctor.name === doctor).forEach((vs) => {
      arrDate.forEach((ad) => {
        if (vs.date.toLocaleString() === ad.date.toLocaleString()) {
          ad.time = ad.time.filter((tm) => tm !== vs.time)
          console.log(ad)
          arrCheck.push(ad)
        } else if (vs.date.toLocaleString() !== ad.date.toLocaleString()) {
          arrCheck.push(ad)
        }
      })
    })

    res.status(200).json({ arrCheck })

  } catch ({ message }) {
    res.status(500).json(message);
  }
})

router.post('/create', async (req, res) => {
  try {
    const { doctor, service, date, time } = req.body;

    const doc = await Doctor.findOne({ where: { name: doctor } })
    const ser = await Service.findOne({ where: { title: service } })

    const visit = await Visit.create({ userId: 1, doctorId: doc.id, serviceId: ser.id, date, time, status: true })
    res.status(200).json({ visit })
  } catch ({ message }) {
    res.status(500).json(message);
  }
})

module.exports = router;