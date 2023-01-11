"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Category", [
      {
        name: "Văn phòng phẩm",
        url: "van-phong-pham",
        highlight: 1,
        order: 15,
        icon: "icon.svg",
        banner: "banner.jpg",
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Category", null, {});
  },
};
