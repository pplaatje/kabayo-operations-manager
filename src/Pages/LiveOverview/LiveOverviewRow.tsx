import { Badge, Col, Row } from "reactstrap";
import { useSearchParams } from "react-router-dom";

import './css/style.css'

const LiveOverviewRow = (props:any) => {
  
  const {riderName, horseName, horseGender, horseAge, horseClassification, combinationStatus, height} = props;
  
  let combinationStatusColor = "primary";
  let status = "";
  const [searchParams, setSearchParams] = useSearchParams();
  
  console.log(searchParams);
  
  if(combinationStatus === "Active"){
    combinationStatusColor = "danger";
    status = "Active rider";
  } else {
    status = combinationStatus;
  }
  
  return (
    <Row xs="18">
      <Col xs="1">
        <Badge color={combinationStatusColor} className="statusBadge">
          { status }
        </Badge>
      </Col>
      <Col>
        {riderName}
      </Col>
      <Col>{horseName}</Col>
      <Col>{horseGender}</Col>
      <Col>{horseAge}</Col>
      <Col>{horseClassification}</Col>
      <Col>{height} m</Col>
    </Row>
  )
  
}

export default LiveOverviewRow;