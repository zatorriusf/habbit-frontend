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

const saveNewHabit = async (newHabit) =>{
    const savedHabit = await habitAxios.post(newHabit);
    return savedHabit.data;
};
module.exports.fetchHabits = fetchHabits;
module.exports.saveNewHabit = saveNewHabit;