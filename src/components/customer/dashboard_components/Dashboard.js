import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Subheader from "../../common/Subheader";
import Orders from "./Orders";
import Timeline from "./Timeline";
import User_Details from "./User_Details";
import Customer_Details from './Customer_Details';
import All_Details from './All_Details';
import React from 'react';

import '../../../css/utility/_utility-dir.scss'


const Dashboard = () => {

  return (
    <>
      <Container fluid className="p-3">
        <Subheader />
        <Row className="g-3">
          <div className="col-lg-12 col-md-12 col-xl-3 col-xxl-3 col-sm-12 order-2 order-md-1">
            <Orders />
            <Timeline />
          </div>
          <div className=" col-lg-12 col-md-12 col-xl-7 col-xxl-7 col-sm-12 order-3 order-md-2">
            <User_Details />
            <Customer_Details />
          </div>
          <div className="col-lg-12 col-md-12 col-xl-2 col-xxl-2 col-sm-12 order-1 order-md-3">
            <All_Details />
          </div>
        </Row>

      </Container>
    </>
  );
}
export default Dashboard;