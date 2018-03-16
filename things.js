module.exports = class Epsumthings{
  constructor(){}
  get baseurl(){return "http://things.epsumlabs.com/api";}
  async user_profile(user){
     let url=this.baseurl+"/world/user/profile?app_id=" + user.appid;
     let result = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                }})
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }

  async update_profile(user,fields,parameters){
     let url=this.baseurl+"/world/user/updateprofile?app_id=" + user.appid + "&fields=" + fields;
     let result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                },
              body:parameters
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }
  async configure_things(user,configure){
     let url=this.baseurl+"/world/thing/config?app_id=" + user.appid;
     let result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                },
              body:configure
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }

  async update_password(user,newpassword){
    let data="{\"password\":\""+newpassword+"\"}";
     let url=this.baseurl+"/world/updatepassword?app_id=" + user.appid;
     let result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                },
              body:data
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }
  async forgot_password_step1(email){
    let data="{\"email\":\""+email+"\"}";
     let url=this.baseurl+"/world/forgot1";
     let result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                },
              body:data
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }
  async forgot_password_step2(email,token,newpassword){
    let data="{\"email\":\""+email+"\",\"token\":\""+token+"\",\"newpassword\":\""+newpassword+"\"}";
     let url=this.baseurl+"/world/forgot2";
     let result = await fetch(url, {
                method: 'POST',
                body:data
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }
  async activity(user){
     let url=this.baseurl+"/world/activity?app_id=" + user.appid;
     let result = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                },
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }
  async control_thing(user,thingid,control){
     let url=this.baseurl+"/world/thing/rw/" + thingid + "?app_id=" + user.appid;
     let result = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                },
                body:control
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }
  async thing_details(user,thingid){
     let url=this.baseurl+"/world/thing/rw/" + thingid + "?app_id=" + user.appid;
     let result = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': user.username+";"+user.accesstoken,
                },
            })
                 .catch((error) => {
                     console.log(error)
                 });
       let responseJson = await result.json()
       return responseJson;
  }
}


// module.exports = class Person {
//    // constructor(firstName, lastName) {
//    //     this.firstName = firstName;
//    //     this.lastName = lastName;
//    // }
//
//    display() {
//        //console.log(this.firstName + " " + this.lastName);
//        console.log("its working");
//    }
// }
