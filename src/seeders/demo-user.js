"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "John Doe",
        username: "johndoe84",
        password: "123456",
        email: "example@example.com",
        phone: "0777399333",
        address: "Israel",
        note: "No Comment",
        idRole: 2,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
