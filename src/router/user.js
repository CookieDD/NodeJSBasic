const {loginCheck} = require("../controller/user.js");
const { SuccessModel, ErrorModel } = require("../model/resModel.js");

const handleUserRouter = (req,res) =>{
    const method = req.method;
    const path = req.url.split("?")[0];

    if(method === "POST" && path === "/api/user/login"){
        const {username, password} = req.body;
        const result = loginCheck(username, password);
        if(result){
            console.log("登陆成功!");
            return new SuccessModel();
        }else{
            return new ErrorModel("登录失败！");
        }
    }
}

module.exports = handleUserRouter;