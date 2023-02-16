module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 09:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 10:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 11:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 12:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 14:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 15:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 16:00",
        status: true,
      },
      {
        userId: 1,
        doctorId: 1,
        servisId: 1,
        date: "20-02-2022, 17:00",
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
