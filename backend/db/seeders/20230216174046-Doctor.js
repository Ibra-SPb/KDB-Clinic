const bcrypt = require("bcrypt");

//doctors
module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      {
        name: "Алексеев Владимир Борисович",
        img: "https://www.bobrmedcollege.by/links/entrant__career-guidance__files/entrant__career-guidance__about-the-profession-1.jpg",
        specific: "Врач невролог, специалист по акупунктуре",
        info: "Стаж 31 год Образование 1989 г. - Окончила Первый Санкт-Петербургский государственный медицинский университет им. акад. И. П. Павлова (ПСПбГМУ)",
      },
      {
        name: "Вилков Алексей Юрьевич",
        img: "https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg",
        specific: "Врач невролог, специалист по акупунктуре",
        info: "Стаж 27 лет Образование 1997 г. - Санкт-Петербургский государственный медицинский университет им. академика И.П. Павлова",
      },
      {
        name: "Алиев Руслан Видадиевич",
        img: "https://ivanovo.smclinic.ru/upload/iblock/75d/2ocr4ubl44x34dn0eh7n1xffqexretfy/massazh-iv.jpg",
        specific: "Массажист",
        info: "Стаж 7 лет Образование СПБ ГБПОУ «Медицинский техникум №2» по специальности «Медицинский брат по массажу»",
      },
      {
        name: "Будагова Елена Михайловна",
        img: "https://ivanovo.smclinic.ru/upload/iblock/1d3/hjzv1ia9pafi09143il1znssznna9e64/fizio-iv.jpg",
        specific: "Физиотерапевт",
        info: "Стаж 23 года Образование 1997 г. - Саратовский Государственный Медицинский университет, специальность «Лечебное дело».",
      },
      {
        name: "Аксенова Татьяна Евгеньевна",
        img: "https://cmd-chehov.ru/wp-content/uploads/2018/07/kozina_olga.jpg",
        specific: "Врач дерматовенеролог, косметолог",
        info: "Стаж 19 лет",
      },
      {
        name: "Алексеев Владимир Борисович",
        img: "https://www.avaclinic.ru/upload/resize_cache/iblock/144/450_585_2/alekseev_vladimir_borisovich.jpg",
        specific: "Мануальный терапевт",
        info: "Стаж работы 26 лет. Образование 2000 г. - окончил медицинский колледж №1 Комитета здравоохранения г. Москвы присвоена квалификация медицинский брат по специальности «сестринское дело» 2000 г. - повышение квалификации по программе «медицинский массаж» 2007 г. - окончил ГОУ ВПО ММА им. И. М. Сеченова Федерального агентства по здравоохранению и социальному развитию по специальности «лечебное дело» 2009 г. - ординатура в ГОУ ВПО «Российский государственный медицинский Университет» по специальности «лечебная физкультура и спортивная медицина» ",
      },
      {
        name: "Аксенова Татьяна Евгеньевна",
        img: "https://www.avaclinic.ru/upload/resize_cache/iblock/21b/450_585_2/balandina_kseniya_aleksandrovna.jpg",
        specific: "Терапевт",
        info: "Стаж работы 15 лет. Образование 1984 г. - окончила Карагандинский государственный медицинский институт 1985 г. - окончила интернатуру",
      },
      {
        name: "Барышева Екатерина Михайловна",
        img: "https://www.avaclinic.ru/upload/resize_cache/iblock/10e/450_585_2/Barysheva_Ekaterina.jpg",
        specific: "Косметолог",
        info: "Стаж работы 6 лет. Образование  2017 г. - Окончил Курский государственный медицинский университет Минздрава России (ФГБОУ ВО КГМУ) 2020 г. Окончил Первый Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова (ФГБОУ ВО ПСПбГМУ им. акад. И.П. Павлова), факультет последипломного образования, специальность  2020 г. Окончила Академия медицинского образования (АНО ДПО АМО) ",
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
