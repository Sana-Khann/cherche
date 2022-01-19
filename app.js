const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const GridFsStorage = require("multer-gridfs-storage");
const crypto = require("crypto");

const { config } = require("dotenv");
const readline = require('readline-sync');
require("dotenv/config");

const app = express();
require('./routes')(app);


app.use(express.static("public-seller"));
app.use(express.static("public-index"));
app.use(express.static("public-service-list"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
const mongoURI= "mongodb+srv://admin:admin@cluster0.k5bjl.mongodb.net/Cluster0?retryWrites=true&w=majority";
const conn= mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log("database connected");
  }
);


app.get("/service-list", (req, res) => {
  shopDetail.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("an error occurred", err);
    } else {
      res.render("service-list", { items: items });
    }
  });
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

const shopDetail = require("./model");


var imageArray = upload.array('image', 10);
app.post("/",(req,res)=>{
  const search= req.body.searchKey;
  console.log(search);
  res.redirect("/"+search);
})
app.post("/post", imageArray , (req, res, next) => {
  var arrayList  = req.body.line;
  const files = req.files;
    var arr=[];
        files.forEach((file)=>{
            var arrItem={
                data: fs.readFileSync(path.join(__dirname + "/uploads/" + file.filename)),
                contentType: "image/png"
            }
            arr.push(arrItem);
        })
  var post = {
    username: req.body.username,
    name: req.body.name,
    ownerName: req.body.ownerName,
    desc: arrayList,
    rating: req.body.rating,
    address: req.body.address,
    img: arr,
    service: req.body.service,
    email: req.body.EmailId,
    number: req.body.PhoneNumber,
    description: req.body.description
    
  };
  
  
  shopDetail.create(post, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/post");
    }
  });
  
});
app.get("/:username", (req, res)=>{
  
  shopDetail.find({username: req.params.username}, (err,posts)=>
  {
    
    res.render("seller-post", {posts:posts});
   
  });
});

app.post("/post/delete", (req,res)=>{
  var userId= req.body.delete;
  console.log(userId);
  shopDetail.deleteOne({username: userId}, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  res.redirect("/post");
})})

let port= process.env.PORT;
if(port== null || port == ""){
  port= 4000;
}
app.listen(port, function(){
  console.log("Server has started succesfully");
});

