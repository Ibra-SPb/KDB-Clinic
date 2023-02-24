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
        phone: "+7(999)999-99-99",
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
