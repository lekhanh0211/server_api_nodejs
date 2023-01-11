"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetail.init(
    {
      orderId: DataTypes.INTEGER,
      proId: DataTypes.INTEGER,
      proName: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      salePrice: DataTypes.DOUBLE,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
