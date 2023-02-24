const router = require('express').Router();
const {
  Visit,
  Doctor,
  Service,
  Service_Doctor,
  User,
} = require('../db/models');
const TelegramBot = require('node-telegram-bot-api');
router.get('/visit', async (req, res) => {
  try {
    const visits = await Visit.findAll({
      include: [
        { model: Doctor, as: 'doctor' },
        { model: Service, as: 'service' },
      ],
    });
    res.status(200).json(visits);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/table', async (req, res) => {
  try {
    const visits = await Service_Doctor.findAll({
      include: [
        { model: Doctor, as: 'doctor' },
        { model: Service, as: 'service' },
      ],
    });
    res.status(200).json(visits);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { service, doctor } = req.body;
    // console.log(service, doctor)
    let visits = await Visit.findAll({
      include: [
        { model: Doctor, as: 'doctor' },
        { model: Service, as: 'service' },
      ],
    });
    const time = [
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '14:00',
      '15:00',
      '16:00',
    ];
    const date = new Date();
    let arrDate = [];
    for (let i = 1; i <= 28; i++) {
      arrDate.push({
        date: new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + i,
          date.getHours() - 3
        ),
        time: time,
      });
    }

    arrDate.forEach((ad) => {
      visits
        .filter((vs) => vs.doctor.name === doctor)
        .forEach((vs) => {
          if (vs.date.toLocaleString() === ad.date.toLocaleString()) {
            ad.time = ad.time.filter((tm) => tm !== vs.time);
          } else {
          }
        });
    });

    res.status(200).json({ arrDate });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/create', async (req, res) => {
  try {
    const { doctor, service, date, time } = req.body;
    const doc = await Doctor.findOne({ where: { name: doctor } });
    const ser = await Service.findOne({ where: { title: service } });
    const user = await User.findOne({ where: { id: req.session.userId } });
    const visit = await Visit.create({
      userId: user.id,
      doctorId: doc.id,
      serviceId: ser.id,
      date,
      time,
      status: true,
    });
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
    await bot.sendMessage(
      232244232,
      `Новая запись:\nДоктор: ${doctor}\nУслуга: ${service}\nДата: ${date}\nВремя: ${time}\nКлиент: ${user.name}`
    );
    await bot.stopPolling();
    if (visit) {
      res.status(200).json({ status: true });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
