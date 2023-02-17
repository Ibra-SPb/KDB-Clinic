const bcrypt = require("bcrypt");

//doctors
module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      {
        name: "Алексеев Владимир Борисович",
        img: "https://www.bobrmedcollege.by/links/entrant__career-guidance__files/entrant__career-guidance__about-the-profession-1.jpg",
        specific: "врач невролог, специалист по акупунктуре",
        info: "стаж 31 лет",
      },
      {
        name: "Вилков Алексей Юрьевич",
        img: "https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg",
        specific: "врач невролог, специалист по акупунктуре",
        info: "стаж 27 лет",
      },
      {
        name: "Алиев Руслан Видадиевич",
        img: "https://ivanovo.smclinic.ru/upload/iblock/75d/2ocr4ubl44x34dn0eh7n1xffqexretfy/massazh-iv.jpg",
        specific: "массажист",
        info: "стаж 7 лет",
      },
      {
        name: "Будагова Елена Михайловна",
        img: "https://ivanovo.smclinic.ru/upload/iblock/1d3/hjzv1ia9pafi09143il1znssznna9e64/fizio-iv.jpg",
        specific: "физиотерапевт",
        info: "стаж 5 лет",
      },
      {
        name: "Аксенова Татьяна Евгеньевна",
        img: "https://cmd-chehov.ru/wp-content/uploads/2018/07/kozina_olga.jpg",
        specific: "врач дерматовенеролог, косметолог",
        info: "стаж 19 лет",
      },
    ];

    const data = types.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Doctors", data);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Doctors", null, {});
  },
};
