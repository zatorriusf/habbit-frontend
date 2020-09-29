import React,{useState} from 'react';
import Habit from '../cmpnts/Habit';
import {Button,Container,Modal, Row} from 'react-bootstrap';
import HabitForm from "../cmpnts/HabitForm"

const Habits = ({habits}) => {
    const [showModal, setShowModal] = useState(false);
    const handleHabitModal =() =>{
        setShowModal(!showModal);
    }
    
    return (<>
        <Container>
            <Row className="mt-3 justify-content-between">
          <h2>Habits</h2>
          <Button variant="info" onClick={handleHabitModal}>New Habit</Button>
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
          className="ml-3 p-3 overflow-auto d-flex flex-nowrap">
              {habits.map(habit =>{
                  return <Habit title={habit.title}
                  desc={habit.desc}
                  streak={habit.streak} 
                  id={habit._id}
                  handleHabitModal={handleHabitModal}/>
              })}
        </Row>
        
        </Container>
        <Modal show={showModal} onHide = {handleHabitModal}><HabitForm cancelAction={handleHabitModal}/></Modal>
        </>
    )
}

export default Habits
