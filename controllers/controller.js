const { Member, MemberShoe, Shoe,Comment } = require('../models/index');
var bcrypt = require('bcryptjs');
class Controller {
  static loginForm(req,res){
    res.render("loginform")
  }
  static memberLogin(req,res){
    Member
        .findOne({
            where:{
                email:req.body.email
            }
        })
        .then (data=>{
            if(bcrypt.compareSync(req.body.password, data.password)){
              req.session.user={
                email: data.email,
                age: data.age, 
               id:data.id,
               name:data.name,
               age:data.age
               }
            res.redirect("/community")
            }
            else{
              throw new err("pass salah");
            }
        })
        .catch(err=>{
            console.log(err)
            res.send("password /email salah");
        })
  }
  static showMyList(req,res){
    let memberId=req.session.user.id
    Member
      .findByPk(memberId,{
        include:[Shoe], order:[["id","asc"]]
      })
      .then(data=>{
        res.send(data)
      })
      .catch(err=>{
        res.send(err);
      })
  }
  static showCommunity(req,res){
    Member
      .findAll({
        include:[Shoe]
      })
      .then(data=>{
        res.send(data);
      })
      .catch(err=>{
        res.send(err);
      })
  }
  static updateForm(req,res){
    Member
      .findOne({
        where:{
          id:req.params.id
        }
      })
      .then(data=>{
        res.send(data);
      })
      .catch(err=>{
        res.send(err);
      })
  }
  static updateMember(req,res){
    let objInput={
          name: req.body.name,
          username:req.body.username,
          age:req.body.age,
          email:req.body.email,
          shoe_size: req.body.shoe_size,
    }
    Member.update(objInput,{
      where :
      {
        id:req.params.id
      }
    })
    .then(()=>{
      res.redirect("/mylist")
    })
  }
  static deleteAccount(req,res){
    Member.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(()=>{
      res.redirect("/login")
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static registerForm(req,res){
    res.render("addform");
  }
  static registerMember(req,res){
    let objInput={
      name: req.body.name,
      username:req.body.username,
      gender:req.body.gender,
      password:req.body.password,
      age:req.body.age,
      email:req.body.email,
      shoe_size: req.body.shoe_size,
  }
  Member
    .create(objInput)  
    .then(data=>{
      res.redirect("/community")
    })
    .catch(err=>{
      console.log(err)
      res.send(err)
    })
  }
  static addComment(req,res){
    member: req.params.id;
    let objInput ={
      memberId  : member,
      Comment   : req.body.Comment

    }
    Comment
      .create(objInput)
      .then(()=>{
        redirect("community/member")
      })
  }
  static deleteShoes(req,res){
    MemberShoe
      .destroy({
        where:{
          ShoeId  : req.params.id,
          MemberId   : req.session.user.id
        }
      })
      .then(()=>{
        res.redirect("/mylist");
      })
      .catch(err=>{
        res.send(err);
      })
  }
  static addShoes(req,res){
    if(typeof req.query.shoeId !== "undefined"){
      let objInput = {
        ShoeId  : req.query.shoeId,
        MemberId   : req.session.user.id
      }
      MemberShoe
        .create(objInput)
        .then(()=>{
          res.redirect("/mylist");
        })
        .catch(err=>{
          res.send(err);
        })
    }
    else{
      res.redirect("/explore")
    } 
  }
  static showExplore(req,res){
    res.render("explore");
  }
  static logout(req,res){
    req.session.destroy((err)=>{
        if(err){
            res.send(err)
        }
        else{
            res.redirect("/user/login")
        }
    })
}
}

module.exports = Controller