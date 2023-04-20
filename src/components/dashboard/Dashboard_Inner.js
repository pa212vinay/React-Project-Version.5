import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Pie_Chart from './Pie_Chart';


const Dashboard_Inner = () => {
  return (
    <>
      <Container fluid className='p-3'>
        <Row className="g-3">
          <div className=" col-lg-12 col-md-12">
            <div className=''>
            <Pie_Chart/>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Dashboard_Inner;