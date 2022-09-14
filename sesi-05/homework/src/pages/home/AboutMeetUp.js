import { Row, Col, Card } from "react-bootstrap"

export default function AboutMeetups({ value, hastag}) {
  return (
    <Row className="mt-3">
      <Col md="{12}">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <h3>About MeetUp</h3>
            <hr />
            <p>
              {value}
              <br />
              {hastag}
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}