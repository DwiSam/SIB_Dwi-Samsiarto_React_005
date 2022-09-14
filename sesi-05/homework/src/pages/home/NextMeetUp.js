import { Row, Col, Card } from "react-bootstrap"

export default function NextMeetups({ title, date, value}) {
  return (
    <Row className="mt-3">
      <Col md="{12}">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <div>
              <h3>Next MeetUp</h3>
              <hr />
              <div className="bg-light p-3">
                <p className="lead">{title}</p>
                <div className="fw-lighter my-3">{date}</div>
                <p style={{ wordSpacing: "2px" }}>
                  {value}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}