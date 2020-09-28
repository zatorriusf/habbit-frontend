import React from 'react'
import {Badge,Button,Card,Col} from 'react-bootstrap'
const Habit = ({title,desc,streak}) => {
    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card className="shadow-sm">
              <Card.Header>{title}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {desc}
                </Card.Text>
                <footer className="footer">
                  {streak !== 0 && <Badge pill variant="info">
                    Streak : {streak}
                  </Badge>}
                </footer>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button variant="outline-info">Complete</Button>
                <Button variant="outline-warning">Edit Habit</Button>
              </Card.Footer>
            </Card>
          </Col>
    )
}

export default Habit;