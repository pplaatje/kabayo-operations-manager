import { Badge, Col, Row } from "reactstrap";


const LiveOverviewRow = (props:any) => {
  
  const {riderName, horseName, horseGender, horseAge, horseClassification, combinationStatus} = props;
  
  return (
    <Row xs="6">
      <Col>{riderName}</Col>
      <Col>{horseName}</Col>
      <Col>{horseGender}</Col>
      <Col>{horseAge}</Col>
      <Col>{horseClassification}</Col>
      <Col>
        <Badge color="primary">
          { combinationStatus }
        </Badge>
      </Col>
    </Row>
  )
  
}

export default LiveOverviewRow;