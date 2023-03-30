import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Customer_Service_Inner from './Customer_Service_Inner';



const Customer_service = () => {

  return (
    <>
      <Container fluid>
        <Row className="">
          <div className="col-md-12">
            <Customer_Service_Inner />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Customer_service;