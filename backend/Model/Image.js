const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: Buffer,
  contentType: String,
  tittle:{
    type:String,
    required:true,
  },
  author:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  quantity:{
    type:String,
    required:true,
  }

})
module.exports = mongoose.model('Image',imageSchema);