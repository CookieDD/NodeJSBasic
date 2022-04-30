class BaseModel{
    constructor(data, message){     //传入data需要为对象类型，若第一个参数传入string，则把this.msg直接赋为data
        if(typeof data === "string"){
            this.message = data;
            data = null;
            message = null;
        }
        if(data){
            this.data = data;
        }
        if(message){
            this.message = message;
        }
    }
}

class SuccessModel extends BaseModel{
    constructor(data, message){
        super(data,message);
        this.errno = 0;
    }
}

class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message);
        this.errno = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}