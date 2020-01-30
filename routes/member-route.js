const express = require('express');
const memberRoute = express.Router();
const Controller = require("../controllers/controller")

memberRoute.use(function (req, res, next) {
  if (req.session.user) {
    next();
  }
  else {
    res.redirect("/user/login")
  }
});

memberRoute.get("/explore", Controller.showExplore);
memberRoute.get("/community", Controller.showCommunity);
memberRoute.get("/mylist/:memberId", Controller.showOtherProfile);
memberRoute.get("/mylist", Controller.showMyList);
memberRoute.get("/community",Controller.showExplore);
memberRoute.get("/mylist/update/:memberId",Controller.updateForm);
memberRoute.post("/mylist/update/:memberId",Controller.updateMember);
memberRoute.get("/mylist/addshoes/:shoeId", Controller.addShoes);
memberRoute.get("/community/:id", Controller.addComment);
memberRoute.get("/mylist/delete/shoes/:shoeId", Controller.deleteShoes);

module.exports = memberRoute;