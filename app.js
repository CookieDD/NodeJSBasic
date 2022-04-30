const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const querystring = require("querystring");
const { resolve } = require("path");

//通过promise方式处理post data
const getPostData = (req)=>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method !== "POST"){
            resolve({});
            return;
        }
        if(req.headers["content-type"] !== "application/json"){
            resolve({});
            return;
        }

        let postData = "";
        req.on("data", chunk=>{
            postData += chunk.toString();
        })
        req.on("end", ()=>{
            if(!postData){
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        })
    })
    return promise;
}

const serverHandle = (req,res)=>{
    res.setHeader("content-type","application/json");

    //获取path
    const url = req.url;
    req.path = url.split("?")[0];

    //解析query
    req.query = querystring.parse(url.split("?")[1])

    //处理post data
    getPostData(req).then(postData=>{
        req.body = postData;
        //console.log("app.js req.body->", req.body);
        //处理 blog路由
        const blogData = handleBlogRouter(req,res);
        if(blogData){
            res.end(
                JSON.stringify(blogData)
            );
            return;
        }

        //处理user路由
        const userData = handleUserRouter(req,res);
        if(userData){
            res.end(JSON.stringify(userData));
            return;
        }

        //未收到以上请求,返回404
        res.writeHead(404,{"content-type":"text/plain"}); //返回纯文本
        res.write("404 NOT FOUND\n");
        res.end();
    })
}

module.exports = serverHandle;