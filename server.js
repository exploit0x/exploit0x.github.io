/**
 * Created by rishabhkhanna on 05/04/17.
 */
const express = require('express');
const app = express();
const path = require('path');

var users = [] ;

app.get('/makeurl',(req , res)=>{
   var user  = req.query.name;
   console.log(user);
   if(users.includes(user)){
      res.send("same user exists");
   }else{
      users.push(user);
      console.log(users);
      res.redirect("/" + user);
   }

});

app.get("/:profile" , (req , res)=>{
   var param = req.params.profile;
   console.log(param);
   if(users.includes(param)){
      res.send(param);
   }else{
      res.send("no such profile");
   }
});

app.get("/" , express.static(path.join(__dirname + "/public")));



app.listen(9090 , ()=>{
   console.log("Magic happens at 9090");
});
