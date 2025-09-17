
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  membername: {
    type: String,
    required: true,
    
  },
  contactnumber: {
    type: String,
    required: true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  memberid:{
    type:String,
    required:true,
    unique:true
  },
  gender:{
    type:String,
    enum:["male","female"],
    required:true
  },
  profilePic:{
    type:String
  }
});

module.exports = mongoose.model('Member', userSchema);
