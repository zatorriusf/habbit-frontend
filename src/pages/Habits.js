import React, { useEffect, useState } from "react";
import HabitList from "../cmpnts/HabitList";
import { Button, Container, Modal, Row, Spinner } from "react-bootstrap";
import HabitForm from "../cmpnts/HabitForm";
import {
  fetchHabits,
  saveNewHabit,
  updateExistingHabit,
} from "../helpers/HabitHelpers";

const Habits = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [habitDetails, setHabitDetails] = useState(null);
  const [habits, setHabits] = useState([]);
  const getHabits = async () => {
    setIsLoading(true);
    const fetchedHabits = await fetchHabits();
    setHabits(fetchedHabits);
    setIsLoading(false);
  };
  useEffect(() => {
    getHabits();
  }, []);
  const openHabitModal = () => {
    setShowModal(true);
  };
  const closeHabitModal = () => {
    setHabitDetails(null);
    setShowModal(false);
  };
  const viewHabitDetails = (id) => {
    const selectedHabit = habits.find((habit) => habit._id === id);
    setHabitDetails(selectedHabit);
  };
  const createNewHabit = async (habitObj) => {
    const newHabit = await saveNewHabit(habitObj);
    setHabits([...habits, newHabit]);
    closeHabitModal();
  };
  const saveHabit = async (existinghabit) => {
    const savedHabit = await updateExistingHabit(existinghabit);
    if (savedHabit) {
      let updatingApplicationHabits = [...habits];
      const updateHabitIndex = updatingApplicationHabits.findIndex(
        (habit) => habit._id === existinghabit._id
      );
      updatingApplicationHabits[updateHabitIndex] = existinghabit;
      setHabits(updatingApplicationHabits);
    }

    closeHabitModal();
  };

  return (
    <>
      {isLoading && (<div className='d-flex justify-content-center'>
        <Spinner animation="border" role="loading" variant='info'>
          <span className="sr-only">Loading...</span>
        </Spinner></div>
      )}
      {!isLoading && (
        <Container>
          <Row className="mt-3 justify-content-between">
            <h2>Habits</h2>
            <Button variant="info" onClick={openHabitModal}>
              New Habit
            </Button>
          </Row>
          <Row>
            <h3>Track your tasks</h3>
          </Row>
          <Row
            xs={2}
            sm={2}
            md={2}
            lg={4}
            xl={4}
            className="ml-3 p-3 overflow-auto d-flex flex-nowrap"
          >
            <HabitList
              habits={habits}
              setHabits={setHabits}
              viewHabitDetails={viewHabitDetails}
              openHabitModal={openHabitModal}
            />
          </Row>
        </Container>
      )}
      <Modal show={showModal} onHide={closeHabitModal}>
        {!habitDetails && (
          <HabitForm
            cancelAction={closeHabitModal}
            saveHabit={createNewHabit}
          />
        )}
        {habitDetails && (
          <HabitForm
            cancelAction={closeHabitModal}
            title={habitDetails.title}
            desc={habitDetails.desc}
            frequency={habitDetails.frequency}
            _id={habitDetails._id}
            saveHabit={saveHabit}
          />
        )}
      </Modal>
    </>
  );
};

export default Habits;
