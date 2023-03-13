import { Badge, Col, Row } from "reactstrap";


const TextOverviewRow = (props:any) => {
  
  const {text, className} = props;
  
  return (
    <Row xs="1" className={className}>
      <Col>{text}</Col>
    </Row>
  )
  
}

export default TextOverviewRow;