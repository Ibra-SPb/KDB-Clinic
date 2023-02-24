module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      {
        doctorId: 1,
        serviceId: 1,
      },
      {
        doctorId: 2,
        serviceId: 2,
      },
      {
        doctorId: 1,
        serviceId: 2,
      },
      {
        doctorId: 2,
        serviceId: 1,
      },
      {
        doctorId: 3,
        serviceId: 3,
      },
      {
        doctorId: 4,
        serviceId: 4,
      },
      {
        doctorId: 5,
        serviceId: 5,
      },
      {
        doctorId: 5,
        serviceId: 3,
      },
      {
        doctorId: 4,
        serviceId: 2,
      },
      {
        doctorId: 5,
        serviceId: 1,
      },
      {
        doctorId: 6,
        serviceId: 6,
      },
      {
        doctorId: 7,
        serviceId: 7,
      },
      {
        doctorId: 8,
        serviceId: 5,
      },
    ];

    const data = types.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Service_Doctors", data);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Service_Doctors", null, {});
  },
};