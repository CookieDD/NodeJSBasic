const loginCheck = (username, password)=>{
    if((username === "Zhangsan") && (password === 123)){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {loginCheck};