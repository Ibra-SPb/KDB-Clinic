const bcrypt = require("bcrypt");
//users
module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      {
        name: "admin",
        email: "admin@admin",
        password: await bcrypt.hash("qwerty", 10),
        img: "",
        phone: "89999999999",
      },
    ];

    const data = types.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Users", data);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
// //doctors
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     const types = [
//       {
//         name: "Алексеев Владимир Борисович",
//         img: "https://www.bobrmedcollege.by/links/entrant__career-guidance__files/entrant__career-guidance__about-the-profession-1.jpg",
//         specific: "врач невролог, специалист по акупунктуре",
//         info: "стаж 31 лет",
//       },
//       {
//         name: "Вилков Алексей Юрьевич",
//         img: "https://fnkcrio.com/upload/iblock/f38/f383f0756604a87cd81082b3f68198dd.jpg",
//         specific: "врач невролог, специалист по акупунктуре",
//         info: "стаж 27 лет",
//       },
//       {
//         name: "Алиев Руслан Видадиевич",
//         img: "https://ivanovo.smclinic.ru/upload/iblock/75d/2ocr4ubl44x34dn0eh7n1xffqexretfy/massazh-iv.jpg",
//         specific: "массажист",
//         info: "стаж 7 лет",
//       },
//       {
//         name: "Будагова Елена Михайловна",
//         img: "https://ivanovo.smclinic.ru/upload/iblock/1d3/hjzv1ia9pafi09143il1znssznna9e64/fizio-iv.jpg",
//         specific: "физиотерапевт",
//         info: "стаж 5 лет",
//       },
//       {
//         name: "Аксенова Татьяна Евгеньевна",
//         img: "https://cmd-chehov.ru/wp-content/uploads/2018/07/kozina_olga.jpg",
//         specific: "врач дерматовенеролог, косметолог",
//         info: "стаж 19 лет",
//       },
//     ];

//     const data = types.map((el) => ({
//       ...el,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }));

//     await queryInterface.bulkInsert("Doctors", data);
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete("Doctors", null, {});
//   },
// };
// //servis
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     const types = [
//       {
//         title: "Неврология",
//         body: "На сегодняшний день развитие клинической неврологии идёт большими шагами. Совершенствование старых методов и появление новых методов исследования центральной и периферической нервных систем – основные тому причины. Такие сложные словосочетания, как «компьютерная диагностика», «электронейромиография», «магнитно-резонансная томография», «ультразвуковая допплерография» вошли в ежедневный обиход невролога. Следствием всего этого являются совершенствование диагностики, оптимизация лечения и реабилитации при заболеваниях нервной системы. Задачей невролога на приеме является подробно осмотреть пациента, изучить жалобы, историю болезни, а также выбрать направление дополнительного обследования, назначить адекватную терапию, наблюдение за эффективностью лечения.",
//         img: "https://primula.su/upload/iblock/1bc/nevrologiya.jpg",
//         price: "стоимость услуги от 3000р",
//       },
//       {
//         title: "Акупунктура",
//         body: "Акупунктура – это направление в китайской медицине, при котором воздействие на организм человека осуществляется специальными иглами через особые точки на теле, путем введения их в эти точки и манипуляций ими.",
//         img: "https://semeynaya.ru/images/cobalt_thumbs/image/413/ecb77349fdc53f2b70a4264061fc1f96.jpg",
//         price: "стоимость услуги от 3000р",
//       },
//       {
//         title: "Лечебный массаж",
//         body: "Лечебный массаж – это одна из самых эффективных оздоровительных процедур, состоящая в мануальном воздействии на различные участки тела. Массаж применялся еще несколько тысяч лет назад для успешного лечения многих заболеваний и восстановления после травм. Такая терапия практически не имеет противопоказаний и побочных эффектов, безболезненна и не требует приема химических препаратов. Современная медицина предлагает различные методики мануальной и аппаратной терапии, ориентированной на лечение или профилактику самых разных заболеваний людей любого возраста.",
//         img: "https://solard.center/wp-content/uploads/2021/05/massage-man-scaled.jpg",
//         price: "стоимость услуги от 3000р",
//       },
//       {
//         title: "Физиотерапия",
//         body: "Физиотерапия - это поддерживающие процедуры для восстановления организма после болезней и травм. В таком лечении используются свет, тепло, ультразвук, электрические импульсы. Физиотерапевтические процедуры назначают для ускорения выздоровления, реабилитации организма после длительного болезненного периода, восстановления нормальных процессов жизнедеятельности, заживления травм и возращения тонуса организму. При хронических заболеваниях физиотерапия помогает снизить риски появления обострений или выйти из таковых состояний.",
//         img: "https://www.baikalmedikl.ru/uploads/10/102276fb-5aed-47c1-9933-19db75871611/5f7ae8d1b76ef519898470.jpg",
//         price: "стоимость услуги от 3000р",
//       },
//       {
//         title: "Косметология",
//         body: "Наши врачи-косметологи рады поделиться своим уникальным подходом к омоложению кожи и оздоровлению тела. Сотрудники постоянно совершенствуют свои навыки, чтобы предложить вам самые новые и безопасные процедуры.",
//         img: "https://alfamed.info/upload/userfiles/15840102747376.jpg",
//       },
//     ];

//     const data = types.map((el) => ({
//       ...el,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }));

//     await queryInterface.bulkInsert("Services", data);
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete("Services", null, {});
//   },
// };

// visits
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     const types = [
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 09:00",
//         status: true,
//       },
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 10:00",
//         status: true,
//       },
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 11:00",
//         status: true,
//       },
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 12:00",
//         status: true,
//       },
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 14:00",
//         status: true,
//       },
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 15:00",
//         status: true,
//       },
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 16:00",
//         status: true,
//       },
//       {
//         userId: 1,
//         doctorId: 1,
//         servisId: 1,
//         date: "20-02-2022, 17:00",
//         status: true,
//       },
//     ];

//     const data = types.map((el) => ({
//       ...el,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }));

//     await queryInterface.bulkInsert("Visits", data);
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete("Visits", null, {});
//   },
// };
