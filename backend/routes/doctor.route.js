const router = require("express").Router();
const { Doctor,Service_Doctor} = require("../db/models");


router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.findAll({ raw: true , include:{model:Service_Doctor}});
    const doctorsAll = await Doctor.findAll({ raw: true });
    res.json({doctors,doctorsAll});
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
