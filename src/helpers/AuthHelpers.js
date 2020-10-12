const axios = require('axios');


const habbitualAuthAxios = axios.create({
    baseURL : process.env.REACT_APP_AUTHURL,
    headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type"
      }
});

const performLoginRequest = async (userObject) =>{
    if(!userObject.email || !userObject.password){
        return;
    }
    try{
        const res = await habbitualAuthAxios.post('login',userObject, { crossdomain: true });
        return res.data;
    } catch(err){
        console.error(err);
    }
};
const performRegisterationRequest = async (userObject) =>{
    if(!userObject.email || !userObject.password){
        return;
    }
    try{
        const res = await habbitualAuthAxios.post('register',userObject, { crossdomain: true });
        return res.data;
    } catch(err){
        console.error(err);
    }
};
module.exports.performLoginRequest = performLoginRequest;
module.exports.performRegisterationRequest = performRegisterationRequest;