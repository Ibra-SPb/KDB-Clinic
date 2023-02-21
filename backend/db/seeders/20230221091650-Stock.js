'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      {
        title: 'Программы массажа',
        description: 'Часто между работой, домом и разными обязательствами трудно найти время для себя. Тем не менее это важно делать, причем регулярно, чтобы продолжать получать от жизни удовольствие. Один из надежных способов позаботиться о своем теле и заодно дать отдохнуть мозгу ― это пройти курс массажа. Массаж помогает снизить стресс, расслабиться, уменьшает боль и мышечное напряжение. Это особенно актуально для людей с сидячей работой и ограниченными физическими нагрузками. Для длительного эффекта массаж лучше проходить курсами. Поэтому мы разработали программы массажа по специальной цене. Таким образом можно включить заботу о себе в повседневную рутину и при этом сэкономить. $При приобретении программы действуют постоянные акции:$минус 10% на курс из 5 сеансов$минус 15% на курс из 10 сеансов',
        img: 'https://www.zdorovieinfo.ru/wp-content/uploads/2018/12/shutterstock_385387339.jpg',
        valid: new Date(2023, 11, 31),
      },
      {
        title: 'Комплексный уход за телом: десятая процедура физиотерапии в подарок',
        description: 'Физиотерапевтические процедуры назначают для ускорения выздоровления, реабилитации организма после длительного болезненного периода, восстановления нормальных процессов жизнедеятельности, заживления травм и возращения тонуса организму. Для лучшего эффекта процедуры необходимо проходить курсом',
        img: 'https://www.garantiya-bor.ru/images/03122018_1.jpg',
        valid: new Date(2023, 11, 31),
      },
      {
        title: 'Минус 10% на повторный прием',
        description: 'Во время первичной консультации наши врачи проводят первичный осмотр и опрос пациента, назначают необходимые исследования. В результате повторного приема врач может поставить диагноз и назначить лечение, а также дать рекомендации по питанию и образу жизни.',
        img: 'https://www.medznat.ru/uploads/images/post/5740/16594273915740.jpg',
        valid: new Date(2023, 11, 31),
      },
    ]

    const data = types.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Stocks", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Stocks", null, {});
  }
};