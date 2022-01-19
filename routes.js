const bodyParser = require("body-parser");
const express= require("express");
const app= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function (app) {
  const shopDetail = require("./model");

  app.get("/Fashion", (req, res) => {
    var details = {
      heading: "Fashion  (Clothing and Accessories)",
      coverImage: "fashion-cover.jpg",
    };
    shopDetail.find({ service: "fashion" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Food", (req, res) => {
    var details = {
      heading: "Food",
      coverImage: "food-cover.jpg",
    };
    shopDetail.find({ service: "food" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Education", (req, res) => {
    var details = {
      heading: "Education  (Tution + Private Tutor)",
      coverImage: "education-cover.jpg",
    };
    shopDetail.find({ service: "education" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Art", (req, res) => {
    var details = {
      heading: "Art",
      coverImage: "art-cover.jpg",
    };
    shopDetail.find({ service: "art" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Makeup-Artist", (req, res) => {
    var details = {
      heading: "Makeup-artist",
      coverImage: "makeup-cover.jpg",
    };
    shopDetail.find({ service: "makeup-artist" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Mehendi-Artist", (req, res) => {
    var details = {
      heading: "Mehendi-artist",
      coverImage: "mehendi-cover.jpg",
    };
    shopDetail.find({ service: "mehendi-artist" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Salon", (req, res) => {
    var details = {
      heading: "Salon",
      coverImage: "salon-cover.jpg",
    };
    shopDetail.find({ service: "salon" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Fitness", (req, res) => {
    var details = {
      heading: "Fitness",
      coverImage: "fitness-cover.jpg",
    };
    shopDetail.find({ service: "fitness" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Real-Estate", (req, res) => {
    var details = {
      heading: "Real Estate",
      coverImage: "realEstate-cover.jpg",
    };
    shopDetail.find({ service: "real-estate" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Photography", (req, res) => {
    var details = {
      heading: "Photography",
      coverImage: "photography-cover.jpg",
    };
    shopDetail.find({ service: "photography" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });
  app.get("/Bakery", (req, res) => {
    var details = {
      heading: "Baker",
      coverImage: "bakery-cover.jpg",
    };
    shopDetail.find({ service: "baker" }, (err, posts) => {
      if (posts) {
        res.render("service-list", {
          details: details,
          posts: posts,
        });
      } else {
        res.send("EMPTY");
      }
    });
  });

  app.get("/post", (req, res) => {
    res.render("post");
  });
};
