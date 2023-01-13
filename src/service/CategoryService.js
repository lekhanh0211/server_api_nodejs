import db from "../models/index";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let cate = await db.Category.findAll({
        raw: true,
      });
      resolve(cate);
    } catch (e) {
      reject(e);
    }
  });
};

let addCate = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Category.create({
        name: data.name,
        url: data.url,
        highlight: data.highlight,
        order: data.order,
        icon: data.icon,
        banner: data.banner,
        status: data.status,
      });
      resolve({
        errCode: 0,
        errMessage: "Thêm mới thành công!!!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let editCate = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 0,
          errMessage: "Bạn chưa truyền vào id cần xóa!",
        });
      }
      let cate = await db.Category.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (cate) {
        (cate.name = data.name),
          (cate.url = data.url),
          (cate.highlight = data.highlight),
          (cate.order = data.order),
          (cate.icon = data.icon),
          (cate.banner = data.banner),
          (cate.status = data.status),
          await cate.save();
        resolve({
          errCode: 0,
          errMessage: "Cập nhật danh mục thành công!!!",
        });
      } else {
        resolve({
          errCode: 1,
          errCode: "Không tìm thấy người dùng!!!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let destroyCate = (cateId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cate = await db.Category.findOne({
        where: { id: cateId },
        raw: false,
      });
      if (cate) {
        await cate.destroy();
        resolve({
          errCode: 0,
          errMessage: "Xóa danh mục thành công!!!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Xóa danh mục thất bại!!!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAll,
  addCate,
  editCate,
  destroyCate,
};
