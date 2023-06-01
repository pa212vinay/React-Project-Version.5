import React from "react"
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

const Tab_five = () => {
    const Locations = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Here, you can add any user Location.
        </Tooltip>
    );

    const Loyalty_program = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Customize how you give credit to loyal customers; configure how you let your customers accumulate and redeem points.
        </Tooltip>
    );
    const Merchant_accounts = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Integrate your payment gateway/credit card processor.
        </Tooltip>
    );
    const Web_service = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link eCommerce sales channels, generate Anywhere Carts for products.
        </Tooltip>
    );


    return (
        <Row className="mt-0 g-3">
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Locations} >
                    
                        <div className="box-hight">
                            <Icon icon="pajamas:location" width="30" className="me-2" />Locations
                        </div>
                    
                </OverlayTrigger>
            </Col>

            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Loyalty_program} >
                                <div className="box-hight">
                        <Icon icon="material-symbols:loyalty-outline" width="30" className="me-2" />Loyalty Program
                    </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Merchant_accounts} >
                    
                        <div className="box-hight">
                            <Icon icon="mdi:user-key-outline" width="30" className="me-2" />Merchant Accounts
                        </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Web_service} >
                    
                        <div className="box-hight">
                            <Icon icon="carbon:api" width="30" className="me-2" />Web Service (API)
                        </div>
                    
                </OverlayTrigger>
            </Col>

        </Row>
    )
};

export default Tab_five;
