import React from "react";
import { Row, Container } from 'react-bootstrap';
import Tracking_Info_Inner from "./Tracking_Info_Inner";
import Subheader from "../../common/Subheader";
import Customer_Nav from "../../customer/Customer_Nav";
import OrdersTab from "../orders/OrdersTab"


const Tracking_Info = () => {

    return(
        <>
            <Container fluid className='p-3'>
                <Subheader />
                <Row className="g-3">
                    <div className="col-lg-12 col-xl-3 col-md-12">
                        <OrdersTab />
                    </div>
                    <div className=" col-lg-12 col-xl-9 col-md-12">
                    <div className='bg_col mt-3 pt-0 p-3'>
                        <Customer_Nav />
                        <Tracking_Info_Inner/>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default Tracking_Info;