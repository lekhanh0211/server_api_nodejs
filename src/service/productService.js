import db from "../models/index";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let pro = await db.Product.findAll({
        raw: true,
      });
      resolve(pro);
    } catch (e) {
      reject(e);
    }
  });
};
let addPro = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Product.create({
        name: data.name,
        url: data.url,
        catId: data.catId,
        price: data.price,
        salePrice: data.salePrice,
        desc: data.desc,
        image: data.image,
        moreImage: data.moreImage,
        order: data.order,
        status: data.status,
      });
      resolve({
        errCode: 0,
        errMessage: "Thêm mới sản phẩm thành công!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let editPro = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 0,
          errMessage: "Bạn chưa truyền vào tham số cần xóa!!!",
        });
      }
      let pro = await db.Product.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (pro) {
        (pro.name = data.name),
          (pro.url = data.url),
          (pro.catId = data.catId),
          (pro.price = data.price),
          (pro.salePrice = data.salePrice),
          (pro.desc = data.desc),
          (pro.image = data.image),
          (pro.moreImage = data.moreImage),
          (pro.order = data.order),
          (pro.status = data.status),
          await pro.save();
        resolve({
          errCode: 1,
          errMessage: "Cập nhật sản phẩm thành công!",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "Sản phẩm không còn tồn tại!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let destroyPro = (proId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let pro = await db.Product.findOne({
        where: { id: proId },
        raw: false,
      });
      if (pro) {
        await pro.destroy();
        resolve({
          errCode: 0,
          errMessage: "Xóa sản phẩm thành công!!!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Xóa sản phẩm thất bại",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAll,
  addPro,
  editPro,
  destroyPro,
};
