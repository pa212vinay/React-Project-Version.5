import * as React from 'react';
import { Container } from 'react-bootstrap';
import Report_Inner from "./Report_Inner";
import './report.scss';

const Report = () => {

  return (
    <>
      <Container fluid className='p-3'>
        <Report_Inner />
      </Container>
    </>
  );
}
export default Report;