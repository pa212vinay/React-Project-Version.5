import React from "react";
import { Row, Container } from 'react-bootstrap';
import Subheader from "../common/Subheader";
import Import_Contact_Inner from "./Import_Contact_Inner";


const Import_Contact = () => {

    return(
        <>
            <Container fluid className='p-3'>
                <Subheader />
                <Row className="g-3">
                    <div className="col-lg-12 col-xl-12 col-md-12">
                    <div className='bg_col mt-3 p-3'>
                        <Import_Contact_Inner />
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default Import_Contact;