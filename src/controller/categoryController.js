import categoryService from "../service/categoryService";


let getAllCate = async (req, res) => {
  let message = await categoryService.getAll();
  return res.status(200).json(message);
};
let postCate = async (req, res) => {
  let message = await categoryService.addCate(req.body);
  return res.status(200).json(message);
};
let putCate = async (req, res) => {
  let message = await categoryService.editCate(req.body);
  return res.status(200).json(message);
};
let delCate = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Bạn chưa truyền vào id cần xóa!",
    });
  } else {
    let message = await categoryService.destroyCate(req.body.id);
    return res.status(200).json(message);
  }
};

module.exports = {
  getAllCate,
  postCate,
  putCate,
  delCate,
};
