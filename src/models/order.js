"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      bookingDate: DataTypes.DATE,
      catId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      note: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      total: DataTypes.DOUBLE,
      ship: DataTypes.DOUBLE,
      totalPrice: DataTypes.DOUBLE,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
