import db from "../models/index";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let blog = await db.Blog.findAll({
        raw: true,
      });
      resolve(blog);
    } catch (e) {
      reject(e);
    }
  });
};

let addBlog = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Blog.create({
        title: data.title,
        linkWeb: data.linkWeb,
        image: data.image,
        order: data.order,
        position: data.position,
        status: data.status,
      });
      resolve({
        errCode: 1,
        errMessage: "Thêm mới bài viết thành công!!!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let editBlog = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 0,
          errMessage: "Bạn chưa truyền vào id bài viết",
        });
      }
      let blog = await db.Blog.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (blog) {
        (blog.title = data.title),
          (blog.linkWeb = data.linkWeb),
          (blog.image = data.image),
          (blog.order = data.order),
          (blog.position = data.position),
          (blog.status = data.status),
          await blog.save();
        resolve({
          errCode: 1,
          errMessage: "Cập nhật bài viết thành công!!!",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "Bài viết không tồn tại!!!!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let delBlog = (blogId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let blog = await db.Blog.findOne({
        where: { id: blogId },
        raw: false,
      });
      if (blog) {
        await blog.destroy();
        resolve({
          errCode: 1,
          errMessage: "Xóa bài viết thành công!!!",
        });
      } else {
        resolve({
          errCode: 0,
          errMessage: "Xóa bài viết thất bại!!!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  getAll,
  addBlog,
  editBlog,
  delBlog,
};
