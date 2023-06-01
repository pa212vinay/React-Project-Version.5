import React from "react";
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

const Tab_Six = () => {
    const POS = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            In this section you can configure POS: This includes your acceptable forms of payment, signature collection, out-of-stock scenario, line item discounts, and more.
        </Tooltip>
    );
    const PAX = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Integrate your EMV Chip Reader to be used with HieCOR.
        </Tooltip>
    );
    const QuickBooks = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link your QuickBooks Desktop or Online account and set up sync from HieCOR.
        </Tooltip>
    );

    const Order_status = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set up order status to be used for incoming orders.
        </Tooltip>
    );

    return (
        <Row className="mt-0 g-3">
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Order_status} >
                    
                        <div className="box-hight">
                            <Icon icon="dashicons:format-status" width="30" className="me-2" />Order Status
                        </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={POS} >
                    
                        <div className="box-hight">
                            <Icon icon="mdi:point-of-sale" width="30" className="me-2" />Point Of Sale (POS)
                        </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={PAX} >
                    
                        <div className="box-hight">
                            <Icon icon="cryptocurrency:pax" width="30" className="me-2" />PAX
                        </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={QuickBooks} >
                    
                        <div className="box-hight">
                            <Icon icon="simple-icons:quickbooks" width="30" className="me-2" />QuickBooks
                        </div>
                    
                </OverlayTrigger>
            </Col>
        </Row>
    )
};

export default Tab_Six;
