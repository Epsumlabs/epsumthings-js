'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = class Accounts{

  set appid(id){this.constructor.appid=id;}
  get appid(){return this.constructor.appid;}
  set username(name){this.constructor.username=name;}
  get username(){return this.constructor.username;}
  set secretkey(key){this.constructor.secretkey=key;}
  get secretkey(){return this.constructor.secretkey;}
  set accesstoken(token){this.constructor.accesstoken=token;}
  get accesstoken(){return this.constructor.accesstoken;}
    async login(){
    let url='http://things.epsumlabs.com/api/world/user/login?app_id='+this.appid;
    let result = await fetch(url, {
               method: 'GET',
               headers: {
                   'user': this.username,
                   'secret':this.secretkey,
               }})
                .catch((error) => {
                    console.log(error)
                });
      let responseJson = await result.json()
      let access_token = await responseJson.access_token
      this.accesstoken=access_token;
      return access_token;
  }
}
