

  
const mongoose = require('mongoose');
  
var shopPost = new mongoose.Schema({
    img:
    {
        type: Array,
        data: Buffer,
        contentType: String
    },
    username: String,
    name: String,
    ownerName:String,
    desc: Array,
    
    rating: Number ,
    address: String,
    
    
    email: String,
    number: String,
    service: String,
    description: String
});
  

  
module.exports = new mongoose.model('Post', shopPost);