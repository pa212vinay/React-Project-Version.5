import React from "react";
import { Row, Container } from 'react-bootstrap';
import Contact_Inner from "./Contact_Inner";
import Subheader from "../common/Subheader";


const Contact = () => {

    return(
        <>
            <Container fluid className='p-3'>
                <Subheader />
                <Row className="g-3">
                    <div className="col-lg-12 col-xl-12 col-md-12">
                    <div className='bg_col mt-3 p-3'>
                        <Contact_Inner/>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default Contact;