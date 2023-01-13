import db from "../models/index";
let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let banner = await db.Banner.findAll({
        raw: true,
      });
      resolve(banner);
    } catch (error) {
      reject(error);
    }
  });
};

let addBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Banner.create({
        title: data.title,
        linkWeb: data.linkWeb,
        image: data.image,
        order: data.order,
        position: data.position,
        status: data.status,
      });
      resolve({
        errCode: 0,
        errMessage: "Thêm mới thành công!!!",
      });
    } catch (error) {
      reject(error);
    }
  });
};
let editBanner = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Bạn chưa truyền vào tham số id cần sửa!",
        });
      }
      let banner = await db.Banner.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (banner) {
        (banner.title = data.title),
          (banner.linkWeb = data.linkWeb),
          (banner.image = data.image),
          (banner.order = data.order),
          (banner.position = data.position),
          (banner.status = data.status),
          await banner.save();
        resolve({
          errCode: 0,
          errMessage: "Cập nhật người dùng thành công!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Không tìm thấy người dùng!",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let destroyBanner = (bannerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let banner = await db.Banner.findOne({
        where: { id: bannerId },
        raw: false,
      });
      if (banner) {
        await banner.destroy();
        resolve({
          errCode: 0,
          errMessage: "Xóa banner thành công!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Xóa banner thất bại",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAll,
  addBanner,
  editBanner,
  destroyBanner,
};
