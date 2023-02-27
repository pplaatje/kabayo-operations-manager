import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "reactstrap"
import LeftMenu from "./LeftMenu"
import TopMenu from "./TopMenu"
import 'bootstrap/dist/css/bootstrap.min.css';

const DefaultLayout:React.FC = () => {
  return (
      <Container
        fluid
        className="gx-0"
      >
        <TopMenu />
        <Row className="gx-0">
          <Col className="bg-light border" xs="2">
            <LeftMenu />
          </Col>
          <Col xs="auto">
            <Outlet />
          </Col>
        </Row>
      </Container>
  )
}

export default DefaultLayout