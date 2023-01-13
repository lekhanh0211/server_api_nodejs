import productService from "../service/productService";

let getAllPro = async (req, res) => {
  let message = await productService.getAll();
  return res.status(200).json(message);
};

let postPro = async (req, res) => {
  let message = await productService.addPro(req.body);
  return res.status(200).json(message);
};
let putPro = async (req, res) => {
  let message = await productService.editPro(req.body);
  return res.status(200).json(message);
};
let deletePro = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 0,
      errMessage: "Bạn phải truyền vào id cần xóa!!!",
    });
  } else {
    let message = await productService.destroyPro(req.body.id);
    return res.status(200).json(message);
  }
};

module.exports = {
  getAllPro,
  postPro,
  putPro,
  deletePro,
};
