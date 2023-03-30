import * as React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Note_inner from "./Note_inner";
import Subheader from '../../common/Subheader';


const Note = () => {
    

    return(
      <>
        <Container fluid className='p-3'>
          <Subheader />
              <Row className="g-3">              
                <div className=" col-lg-12 col-md-12">
                  <Note_inner />
                </div>
              </Row>
        </Container>
      </>
    );
}
export default Note;