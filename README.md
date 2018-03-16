# EpsumThings Javascript SDK
EpsumThings JavaScript SDK for developers and hobbyists alike for using EpsumThings IoT platform.

# Installation
```
npm install epsumthings
```

# Example Code
```javascript
'use strict';
var Accounts = require("epsumthings/accounts");
var Epsumthings=require("epsumthings/things");
 var user= new Accounts();
 //get username,secretkey,appid from http://things.epsumlabs.com
 user.appid="app_id";
 user.username="username";
 user.secretkey="secretkey";
 var access = user.login();
 console.log(access);
access.then(value=>{
  let t=new Epsumthings();
  var m="{  \"thingid\": \"string\",\"thingname\": \"string\"}";
  let mydata=t.thing_details(user,"EP0008");
  mydata.then(d=>{
    console.log(d);
  })
})
```
# About
EpsumThings (Beta) is an IoT platform developed at Epsum Labs Private Limited for people like you to taste the sweetness of IoT with minimal effort.

Get registered at [EpsumThings](http://things.epsumlabs.com) to explore the IoT platform.
