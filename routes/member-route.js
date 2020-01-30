const express = require('express');
const memberRoute = express.Router();
const Controller = require("../controllers/controller")

// memberRoute.use(function(req,res,next){
//   if(req.session.user){
//       next();
//   }
//   else{
//       res.redirect("/user/login")
//   }
// })
memberRoute.get("/community", Controller.showCommunity);
memberRoute.get("/mylist/", Controller.showMyList);
memberRoute.get("/community",Controller.showExplore);
memberRoute.get("mylist/update",Controller.updateForm);
memberRoute.post("/mylist/update",Controller.updateMember);
memberRoute.get("mylist/addshoes",Controller.addShoes)
memberRoute.post("mylist/addshoes",Controller.addShoes)
memberRoute.get("/community/:id",Controller.addComment);
module.exports = memberRoute