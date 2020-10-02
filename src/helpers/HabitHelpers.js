const axios = require('axios');

const habbitualURLBase = `https://habbitual.herokuapp.com/api/habits/`;
const token = localStorage.getItem('token');
const habitAxios = axios.create({
    baseURL : habbitualURLBase,
    headers : {
        token : token
    }
})

//get all habits for user
const fetchHabits = async () =>{
    const fetchedHabits = await habitAxios.get();
    return fetchedHabits.data;
}

module.exports.fetchHabits = fetchHabits;