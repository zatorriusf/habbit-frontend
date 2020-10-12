const axios = require('axios');

const habbitualURLBase =process.env.REACT_APP_HABITURL;
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

const saveNewHabit = async ({title,frequency,desc}) =>{
    const newHabit = {
        title : title,
        frequency : frequency,
        desc :desc 
    }
    const savedHabit = await habitAxios.post('',newHabit);
    return savedHabit.data;
};

const updateExistingHabit = async ({_id,title,frequency,desc}) =>{
    const existingHabit = {
        habitId : _id,
        title : title,
        frequency : frequency,
        desc :desc
    }
    const updatedHabit = await habitAxios.patch('',existingHabit);
    return updatedHabit.data;
};

const trackHabit = async (_id) =>{
    const habit = {habitId : _id};
    const trackedHabit = await habitAxios.patch('/track',habit);
    return trackedHabit.data;
}
module.exports.fetchHabits = fetchHabits;
module.exports.saveNewHabit = saveNewHabit;
module.exports.updateExistingHabit = updateExistingHabit;
module.exports.trackHabit = trackHabit;