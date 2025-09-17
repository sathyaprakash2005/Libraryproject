const mongoose= require('mongoose');
const issueSchema = new mongoose.Schema({
    membername:{
        type:String,
        required:true,
    },
    bookname:{
       type:String,
        required:true, 
    },
    issuedate:{
        type:Date,
        required:true,
    },
    returndate:{
        type:Date,
        required:true,
    }
})
module.exports=mongoose.model('Issue',issueSchema)