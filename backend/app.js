require("@babel/register");
require("dotenv").config();
const path = require("path");
const express = require("express");
const db = require("./db/models");
const config = require("./config/config");

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);
const serviceRoute = require("./routes/service.route");
const authRoute = require("./routes/auth.route");
const appointRoute = require("./routes/appoint.route");
const doctorRoute = require("./routes/doctor.route");

app.use("/api/appoint", appointRoute);
app.use("/auth", authRoute);
app.use("/api/service", serviceRoute);
app.use("/api/doctor", doctorRoute);

app
  .listen(PORT)
  .on("error", (error) => {
    console.error("Ошибка при запуске веб-сервера");
    console.error(error.message);
  })
  .on("listening", async () => {
    console.log("Веб-сервер слушает порт,", PORT);
    try {
      await db.sequelize.authenticate({ logging: false });
      console.log("БД подключена успешно");
    } catch (error) {
      console.error("Ошибка подключения БД");
      console.error(error.message);
    }
  });
