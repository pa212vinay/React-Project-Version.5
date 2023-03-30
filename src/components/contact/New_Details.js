import React from "react";
import { Row, Container } from 'react-bootstrap';
import Subheader from "../common/Subheader";
import New_Details_Inner from "./New_Details_Inner";


const New_Details = () => {

    return(
        <>
            <Container fluid className='p-3'>
                <Subheader />
                <Row className="g-3">
                    <div className="col-lg-12 col-xl-12 col-md-12">
                    <div className='bg_col mt-3 p-3'>
                        <New_Details_Inner/>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default New_Details;