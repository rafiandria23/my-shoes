const { Member, MemberShoe, Shoe,Comment } = require('../models/index');
const bcrypt = require('bcryptjs');

class Controller {
  static loginForm(req, res) {
    const pageInfo = {
      title: "Login",
      session: req.session
    };
    res.render("login", { pageInfo });
  }
  
  static memberLogin(req, res) {
    const pageInfo = {
      title: "Login",
      session: req.session
    };
    if(req.body.username.length===0 || req.body.password.length === 0){
      res.render("login", {pageInfo, errorMessages:["password and username must be filled"]})
    }
    Member
      .findOne({
        where: {
          username: req.body.username
        }
      })
      .then(data => {
        if (bcrypt.compareSync(req.body.password, data.password)) {
          req.session.user = {
            username: data.username,
            email: data.email,
            age: data.age,
            id: data.id,
            name: data.name,
            age: data.age
          }

          res.redirect("/community");
        }
        else {
          throw new Error("Username or password is wrong!");
        }
      })
      .catch(err => {
        res.send("hallo")
        //res.render("login", {errorMessage:[err.message]})
      });
  }

  static showMyList(req,res) {
    const pageInfo = {};
    const memberId = req.session.user.id;
    Member
      .findByPk(memberId, {
        include: [Shoe,Comment]
      })
      .then(member => {
        pageInfo.title = member.name;
        pageInfo.session = req.session;
        res.render("mylist", { pageInfo, member });
      })
      .catch(err => {
        res.send(err);
      });
  }

  static showOtherProfile(req, res) {
    const pageInfo = {};
    Member.findByPk(req.params.memberId, {include: [Shoe,Comment]})
      .then(member => {
        pageInfo.session = req.session;
        pageInfo.title = member.name;
        res.render("mylist", { pageInfo, member });
      })
      .catch(err => {
        res.send(err);
      });
  }

  static showCommunity(req, res) {
    const pageInfo = {
      title: 'Community',
      session: req.session
    };
    Member
      .findAll({
        include: [Shoe], order: [["id", "ASC"]]
      })
      .then(members => {
        res.render("community", { pageInfo, members });
      })
      .catch(err => {
        res.send(err);
      });
  }

  static updateForm(req, res) {
    const pageInfo = {};
    Member.findByPk(req.params.memberId)
      .then(member => {
        pageInfo.title = `Edit Profile - ${member.name}`;
        pageInfo.session = req.session;
        res.render("edit", { pageInfo, member });
      })
      .catch(err => {
        res.send(err);
      });
  }

  static updateMember(req, res) {
    const objInput = {
      name: req.body.name,
      username: req.body.username,
      age: Number(req.body.age),
      email: req.body.email,
      gender: req.body.gender,
      shoe_size: Number(req.body.shoe_size),
    };

    Member.update(objInput, { where: { id: req.params.memberId } })
      .then(member => {
        res.redirect("/mylist");
      })
      .catch(err => {
        res.send(objInput);
    });
  }

  static deleteAccount(req, res) {
    Member.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.redirect("/login");
      })
      .catch(err => {
        res.send(err);
      });
  }

  static registerForm(req, res) {
    res.render("register");
  }

  static registerMember(req, res) {
    const objInput = {
      name: req.body.name,
      username: req.body.username,
      gender: req.body.gender,
      password: req.body.password,
      age: req.body.age,
      email: req.body.email,
      shoe_size: req.body.shoe_size
    };

    Member
      .create(objInput)
      .then(data => {
        res.redirect("/community");
      })
      .catch(err => {
        res.send(err);
      });
  }

  static addComment(req,res){
    let member= req.params.memberId;
    let objInput ={
      MemberId  : member,
      Comment   : req.body.Comment
    }
    Comment
      .create(objInput)
      .then(()=>{
        res.redirect("back")
      })
      .catch(err=>{
        res.send(err);
      })
  }
  static deleteShoes(req,res){
    MemberShoe
      .destroy({
        where: {
          ShoeId: req.params.shoeId,
          MemberId: req.session.user.id
        }
      })
      .then(() => {
        res.redirect("/mylist");
      })
      .catch(err => {
        res.send(err);
      });
  }

  static addShoes(req, res) {
    if(typeof req.params.shoeId != "undefined"){
      const objInput = {
        ShoeId: req.params.shoeId,
        MemberId: req.session.user.id
      };

      MemberShoe
        .create(objInput)
        .then(result => {
          res.redirect("/mylist");
        })
        .catch(err => {
          res.send(err);
        });
    }
    else {
      res.redirect("/explore")
    }
  }

  static showExplore(req, res) {
    const pageInfo = {
      title: "Explore",
      session: req.session
    };

    Shoe.findAll()
      .then(shoes => {
        pageInfo.session = req.session;
        res.render("explore", { pageInfo, shoes });
      })
      .catch(err => {
        res.send(err);
      });
  }

  static logout(req,res){
    req.session.destroy((err) => {
      if (err) {
        res.send(err);
      }
      else {
        res.redirect("/user/login");
      }
    });
  }
}

module.exports = Controller