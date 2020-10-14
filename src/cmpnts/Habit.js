import React,{useState} from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
const Habit = ({
  title,
  desc,
  streak,
  frequency,
  _id,
  lastActivity,
  viewHabitDetails,
  handleHabitModal,
  trackHabit
}) => {
  const launchEditHabit = () => {
    viewHabitDetails(_id);
    handleHabitModal();
  };
  const checkIfTracked = () =>{
    if(lastActivity === null){
      console.log('ture because we have have no last activity')
      return false;
    }
    
    let nextAvialableUpdate = new Date(lastActivity);
    
    switch(frequency){
      case 'daily':
          nextAvialableUpdate.setDate(nextAvialableUpdate.getDate() + 1);
          break;
      case 'weekly':
        nextAvialableUpdate.setDate(nextAvialableUpdate.getDate() + 7);
        break;
      case 'bi-weekly':
        nextAvialableUpdate.setDate(nextAvialableUpdate.getDate() + 14);
        break;
      case 'monthly':
        nextAvialableUpdate.setDate(nextAvialableUpdate.getDate() + 30);
        break;
      default:
        console.error(`couldn't calc avaliable updated`)
        return false;
    }
    console.log(nextAvialableUpdate,frequency)
    if(Date.now() >= nextAvialableUpdate){
      console.log('true because enough time has passed')
      return false;
    } else {
      return true;
    }
  }
  const [isTracked, setIsTracked] = useState(checkIfTracked());

  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={3}>
      <Card className="shadow-sm">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button
            variant="outline-info"
            onClick={() => {
              trackHabit(_id);
              setIsTracked(true);
            }}
            disabled={isTracked}
          >
            Complete
          </Button>
          <Button variant="outline-warning" onClick={launchEditHabit}>
            Edit Habit
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Habit;
