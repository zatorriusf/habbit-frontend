import React, { useState } from "react";
import Habit from "../cmpnts/Habit";
import { Button, Container, Modal, Row } from "react-bootstrap";
import {v4 as uuidv4} from 'uuid';
import HabitForm from "../cmpnts/HabitForm";
import {saveNewHabit} from "../helpers/HabitHelpers";

const Habits = ({ habits,setHabits }) => {
  const [showModal, setShowModal] = useState(false);
  const [habitDetails, setHabitDetails] = useState(null);
  const openHabitModal = () => {
    setShowModal(true);
  };
  const closeHabitModal = () =>{
    setHabitDetails(null);
    setShowModal(false)
  }
  const viewHabitDetails = (id) =>{
    const selectedHabit = habits.find(habit => habit._id === id);
    setHabitDetails(selectedHabit);
  }
  const createNewHabit = async (habitObj) =>{
    const newHabit = await saveNewHabit(habitObj);
    setHabits([...habits,newHabit]);
    closeHabitModal();
  };
  const saveHabit = ({_id,title,desc,frequency}) =>{
    if(_id){
      const updateHabitIndex = habits.findIndex(habit => habit._id === _id);
      habits[updateHabitIndex].title = title;
      habits[updateHabitIndex].desc = desc;
      habits[updateHabitIndex].frequency = frequency;
      //send update to database
    } else {
      const newHabit = {
        _id : uuidv4(),
        title : title,
        desc : desc,
        frequency : frequency,
        streak : 0
      }
      habits.push(newHabit);
    }
    closeHabitModal();
  }

  return (
    <>
      <Container>
        <Row className="mt-3 justify-content-between">
          <h2>Habits</h2>
          <Button variant="info" onClick={openHabitModal}>
            New Habit
          </Button>
        </Row>
        <Row>
          <h3>Track today</h3>
        </Row>
        <Row
          xs={2}
          sm={2}
          md={2}
          lg={4}
          xl={4}
          className="ml-3 p-3 overflow-auto d-flex flex-nowrap"
        >
          {habits.map((habit) => {
            return (
              <Habit
                title={habit.title}
                desc={habit.desc}
                streak={habit.streak}
                _id = {habit._id}
                key={habit._id}
                handleHabitModal={openHabitModal}
                viewHabitDetails={viewHabitDetails}
              />
            );
          })}
          
        </Row>
      </Container>
      <Modal show={showModal} onHide={closeHabitModal}>
        {!habitDetails && <HabitForm cancelAction={closeHabitModal} saveHabit={createNewHabit}/>}
        {habitDetails  && <HabitForm cancelAction={closeHabitModal}
                                     title={habitDetails.title}
                                     desc ={habitDetails.desc}
                                     frequency = {habitDetails.frequency} 
                                     _id={habitDetails._id}
                                     saveHabit={saveHabit}/>}
      </Modal>
    </>
  );
};

export default Habits;
