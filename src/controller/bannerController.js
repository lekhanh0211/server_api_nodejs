import bannerService from "../service/bannerService";

let getAllBanner = async (req, res) => {
  let message = await bannerService.getAll();
  return res.status(200).json(message);
};

let postBanner = async (req, res) => {
  let message = await bannerService.addBanner(req.body);
  return res.status(200).json(message);
};

let putBanner = async (req, res) => {
  let message = await bannerService.editBanner(req.body);
  return res.status(200).json(message);
};

let delBanner = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Bạn chưa truyền vào tham số id!!!",
    });
  } else {
    let message = await bannerService.destroyBanner(req.body.id);
    return res.status(200).json(message);
  }
};

module.exports = {
  getAllBanner,
  postBanner,
  putBanner,
  delBanner,
};
