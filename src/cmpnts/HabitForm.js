import React,{useRef,useState} from "react";
import { Button, Form ,Row} from "react-bootstrap";

const HabitForm = ({ _id, title, desc, frequency,cancelAction,saveHabit }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const [formFrequency, setFormFrequency] = useState(frequency);
  const setSelectedFrequency = (freq) =>{
    setFormFrequency(freq)
  }
  const frequencyOptions = ["daily","weekly","bi-weekly","monthly"];
  const saveHabitForm = () =>{
    const habit = {
      _id : _id || null,
      title : titleRef.current.value,
      desc : descRef.current.value,
      frequency : formFrequency
    };
    saveHabit(habit);
  }
  return (
    <div className="p-3">
      <h3>New Habit</h3>
      <Form >
        <Form.Group controlId="habitTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" ref={titleRef} defaultValue={title || ""} />
        </Form.Group>
        <Form.Group controlId="habitDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" defaultValue={desc || ""} ref={descRef}/>
        </Form.Group>
        <Form.Group controlId="habitFrequency">
          <Form.Label>Frequency</Form.Label>
          {
            frequencyOptions.map((freq) => {
              return <Form.Check
            label={freq}
            type="radio"
            name="habitFrequencyRaidos"
            id={`habitFrequencyRaidos_${freq}`}
            defaultChecked={frequency === freq}
            onChange={() => setSelectedFrequency(freq)}
          />
            })
          }
          
        </Form.Group>
        <Row className="d-flex justify-content-between p-3">
            <Button variant="outline-secondary" onClick={() =>cancelAction()}>Cancel</Button>
            <Button variant="outline-info" onClick={saveHabitForm}>{_id?"Update Habit":"Save New Habit"}</Button>
        </Row>
      </Form>
    </div>
  );
};

export default HabitForm;
