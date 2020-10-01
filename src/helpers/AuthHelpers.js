const axios = require('axios');

const habbitualURLBase = `https://habbitual.herokuapp.com/api/user/`

const performLoginRequest = async (userObject) =>{
    if(!userObject.email || !userObject.password){
        return;
    }
    try{
        const res = await axios.post(habbitualURLBase.concat('login'),userObject, { crossdomain: true });
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
        const res = await axios.post(habbitualURLBase.concat('register'),userObject, { crossdomain: true });
        return res.data;
    } catch(err){
        console.error(err);
    }
};
module.exports.performLoginRequest = performLoginRequest;
module.exports.performRegisterationRequest = performRegisterationRequest;