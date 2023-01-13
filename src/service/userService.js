import db from "../models/index";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);
let checkEmail = (uName) => {
  return new Promise(async (resolve, reject) => {
    let user = await db.User.findOne({
      where: { username: uName },
    });
    if (user) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

let hashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordBcrypt = await bcrypt.hashSync(password, salt);
      resolve(hashPasswordBcrypt);
    } catch (error) {
      reject(e);
    }
  });
};

let handleAccountLogin = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkEmail(username);
      if (isExist) {
        let user = await db.User.findOne({
          where: { username: username },
          raw: true,
          //   attributes: {
          //     exclude: ["password"], //ẩn password
          //   },
          //attributes: ["email", "name"]
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Mật khẩu bạn nhập không chính xác";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "User not found";
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Tài khoản này không tồn tại trong hệ thống!`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};
let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findAll({
        raw: true,
      });
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};
let addUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkEmail(data.username);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Tài khoản đã tồn tại!",
        });
      } else {
        let hashUserPassword = await hashPassword(data.password);
        await db.User.create({
          name: data.name,
          username: data.username,
          password: hashUserPassword,
          email: data.email,
          phone: data.phone,
          address: data.address,
          note: data.note,
          idRole: data.idRole,
          active: data.active,
        });
        resolve({
          errCode: 1,
          errMessage: "Thêm mới người dùng thành công!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let editUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 0,
          errMessage: "Bạn chưa truyền vào tham số",
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });
      let hashUserPassword = await hashPassword(data.password);
      if (user) {
        (user.name = data.name),
          (user.username = data.username),
          (user.password = hashUserPassword),
          (user.email = data.email),
          (user.phone = data.phone),
          (user.address = data.address),
          (user.note = data.note),
          (user.idRole = data.idRole),
          (user.active = data.active);
        await user.save();
        resolve({
          errCode: 1,
          errMessage: "Cập nhật người dùng thành công!",
        });
      } else {
        resolve({
          errCode: 2,
          errMessage: "Người dùng không tồn tại!!!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let delUser = (uId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: uId },
        raw: false,
      });
      if (user) {
        await user.destroy();
        resolve({
          errCode: 1,
          errMessage: "Xóa người dùng thành công!",
        });
      } else {
        resolve({
          errCode: 0,
          errMessage: "Xóa người dùng thất bại!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAll,
  addUser,
  editUser,
  delUser,
  handleAccountLogin,
};
