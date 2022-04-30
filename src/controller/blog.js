const getList = (author, keyword)=>{
    //先返回假数据，格式是正确的
    return [
        {
            id:1,
            title:"标题A",
            content:"内容A",
            createTime: 1289031231,
            author: "zhangsan"
        },
        {
            id:2,
            title:"标题B",
            content:"内容B",
            createTime: 123912803213,
            author: "lisi"
        },
    ]
}

const getDetail = (id)=>{
        return {
            id:1,
            title:"标题A",
            content:"内容A",
            createTime: 1289031231,
            author: "zhangsan"
        }
}

const newBlog = (blogData={})=>{
    //console.log("newBlog blogData...", blogData);
    //blogData是一个博客对象，包含title, content属性
    return{
        id: 3,  //表示新建博客，插入数据表里的id
    }
}

const updateBlog = (id, blogData={})=>{
    console.log("update blog", id, blogData);
    return true;
}

const deleteBlog = (id)=>{
    console.log(`Deleting blog id {id}...`);
    return true;
}
module.exports = {getList, getDetail, newBlog, updateBlog, deleteBlog}