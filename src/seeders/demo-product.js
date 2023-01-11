"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Product one",
        url: "product-one",
        catId: 1,
        price: 23000,
        salePrice: 21000,
        desc: "No description",
        image: "product.jpg",
        moreImage: "a.jpeg,b.png",
        order: 9,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
