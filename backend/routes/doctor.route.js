const router = require("express").Router();
const { Doctor } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const doctor = await Doctor.findAll({ raw: true });
    res.json(doctor);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
