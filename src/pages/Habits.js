import React from 'react';
import Habit from '../cmpnts/Habit';
import {Button,Container, Row} from 'react-bootstrap';

const Habits = ({habits}) => {
    return (
        <Container>
            <Row className="mt-3 justify-content-between">
          <h2>Habits</h2>
          <Button variant="info">New Habit</Button>
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
          className="my-3 py-3 overflow-auto d-flex flex-nowrap">
              {habits.map(habit =>{
                  return <Habit title={habit.title}
                  desc={habit.desc}
                  streak={habit.streak} />
              })}
        </Row>
        
        </Container>
    )
}

export default Habits
