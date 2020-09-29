import React from "react";
import { Button, Form ,Row} from "react-bootstrap";

const HabitForm = ({ _id, title, desc, frequency,cancelAction }) => {
  return (
    <div className="p-3">
      <h3>New Habit</h3>
      <Form >
        <Form.Group controlId="habitTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder={title || ""} />
        </Form.Group>
        <Form.Group controlId="habitDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder={desc || ""} />
        </Form.Group>
        <Form.Group controlId="habitFrequency">
          <Form.Label>Frequency</Form.Label>
          <Form.Check
            label="daily"
            type="radio"
            name="habitFrequencyRaidos"
            id="habitFrequencyRaidos_daily"
          />
          <Form.Check
            label="weekly"
            type="radio"
            name="habitFrequencyRaidos"
            id="habitFrequencyRaidos_weekly"
          />
          <Form.Check
            label="bi-weekly"
            type="radio"
            name="habitFrequencyRaidos"
            id="habitFrequencyRaidos_bi-weekly"
          />
          <Form.Check
            label="monthly"
            type="radio"
            name="habitFrequencyRaidos"
            id="habitFrequencyRaidos_monthly"
          />
        </Form.Group>
        <Row className="d-flex justify-content-between p-3">
            <Button variant="outline-secondary" onClick={() =>cancelAction()}>Cancel</Button>
            <Button variant="outline-info">{_id?"Update Habit":"Save New Habit"}</Button>
        </Row>
      </Form>
    </div>
  );
};

export default HabitForm;
