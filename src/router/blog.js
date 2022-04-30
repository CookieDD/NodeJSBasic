const {
    getList, 
    getDetail, 
    newBlog, 
    updateBlog, 
    deleteBlog} = require("../controller/blog");
const {SuccessModel, ErrorModel} = require("../model/resModel");

const handleBlogRouter = (req,res)=>{
    const method = req.method;
    const id = req.query.id;

    if(method === "GET"){
        if(req.path === "/api/blog/list"){
            const author = req.query.author || "";
            const keyword = req.query.keyword || "";
            const listData = getList(author, keyword);
            return new SuccessModel(listData);
        }
        if(req.path === "/api/blog/detail"){
            const data = getDetail(id);
            return new SuccessModel(data);
        }
    }

    if(method === "POST"){

        if(req.path === "/api/blog/new"){
            const data = newBlog(req.body); //receive the returned obj with id-only
            const output = new SuccessModel(data);
            return output;  //pass data to SuccessModel to obtain a valid object to be returned
        }

        if(req.path === "/api/blog/update"){
            const result = updateBlog(id, req.body);
            if(result){
                return new SuccessModel();
            }
            else{
                return new ErrorModel("更新博客失败！");
            }
        }

        if(req.path === "/api/blog/delete"){
            const result = deleteBlog(id);
            if(result){
                return new SuccessModel();
            }else{
                return new ErrorModel("删除失败!");
            }
        }
    }
}

module.exports = handleBlogRouter;