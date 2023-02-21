const router = require('express').Router();
const { Stock } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.findAll();
    res.status(200).json(stocks);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;