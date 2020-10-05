import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
const Habit = ({
  title,
  desc,
  streak,
  frequency,
  _id,
  viewHabitDetails,
  handleHabitModal,
  trackHabit,
}) => {
  const launchEditHabit = () => {
    viewHabitDetails(_id);
    handleHabitModal();
  };

  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={3}>
      <Card className="shadow-sm">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{desc}</Card.Text>
          <footer className="footer">
            {streak !== 0 && (
              <Badge pill variant="info">
                Streak : {streak}
              </Badge>
            )}
          </footer>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button
            variant="outline-info"
            onClick={() => {
              trackHabit(_id);
            }}
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
