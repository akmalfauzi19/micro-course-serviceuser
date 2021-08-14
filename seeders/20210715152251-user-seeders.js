"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "akmal",
          profession: "Admin Micro",
          role: "admin",
          email: "admin@gmail.com",
          password: await bcrypt.hash("admin", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "fauzi",
          profession: "Front End Developer",
          role: "student",
          email: "user@gmail.com",
          password: await bcrypt.hash("user", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
