module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "2021-01-01",
        time: "09:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 2,
        servisId: 2,
        date: "2021-01-01",
        time: "10:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 3,
        servisId: 3,
        date: "2021-01-01",
        time: "11:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 4,
        servisId: 4,
        date: "2021-01-01",
        time: "12:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 5,
        servisId: 5,
        date: "2021-01-01",
        time: "14:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 2,
        date: "2021-01-01",
        time: "15:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 2,
        servisId: 1,
        date: "2021-01-01",
        time: "16:00",
        status: true,
      },
    ];

    const data = types.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Visits", data);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Visits", null, {});
  },
};
