import React, { useState } from "react";
import Habit from "../cmpnts/Habit";
import { Button, Container, Modal, Row } from "react-bootstrap";
import HabitForm from "../cmpnts/HabitForm";

const Habits = ({ habits }) => {
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
    console.log(selectedHabit.title)
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
        {!habitDetails && <HabitForm cancelAction={closeHabitModal} />}
        {habitDetails  && <HabitForm cancelAction={closeHabitModal}
                                     title={habitDetails.title}
                                     desc ={habitDetails.desc}
                                     frequency = {habitDetails.frequency} 
                                     _id={habitDetails._id}/>}
      </Modal>
    </>
  );
};

export default Habits;
