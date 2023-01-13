import blogService from "../service/blogService";

let getAllBlog = async (req, res) => {
  let message = await blogService.getAll();
  return res.status(200).json(message);
};

let postBlog = async (req, res) => {
  let message = await blogService.addBlog(req.body);
  return res.status(200).json(message);
};

let putBlog = async (req, res) => {
  let message = await blogService.editBlog(req.body);
  return res.status(200).json(message);
};

let deleteBlog = async (req, res) => {
    if(!req.body.id){
        return res.status(200).json({
            errCode:1,
            errMessage:"Bạn chưa truyền vào tham số id!!!"
        })
    }else{
        let message = await blogService.delBlog(req.body.id);
        return res.status(200).json(message);
    }
};

module.exports = {
  getAllBlog,
  postBlog,
  putBlog,
  deleteBlog,
};
