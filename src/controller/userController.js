import userService from "../service/userService";

let getAllUser = async (req, res) => {
  let message = await userService.getAll();
  return res.status(200).json(message);
};

let postUser = async (req, res) => {
  let message = await userService.addUser(req.body);
  return res.status(200).json(message);
};
let putUser = async (req, res) => {
  let message = await userService.editUser(req.body);
  return res.status(200).json(message);
};
let deleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 2,
      errMessage: "Bạn chưa truyền vào tham số",
    });
  } else {
    let message = await userService.delUser(req.body.id);
    return res.status(200).json(message);
  }
};

let handleLogin = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (!username || !password) {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Tài khoản và mật khẩu không được để trống!",
    });
  }
  let userData = await userService.handleAccountLogin(username, password);
  return res.status(200).json({
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

module.exports = {
  getAllUser,
  postUser,
  putUser,
  deleteUser,
  handleLogin,
};
