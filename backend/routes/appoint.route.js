const router = require('express').Router();
const { Visit, Doctor, Service } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const visits = await Visit.findAll(

    );

    res.status(200).json(visits);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;