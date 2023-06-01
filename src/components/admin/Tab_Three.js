import React from "react"
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

const Tab_Three = () => {

    const Custom_domains_details = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Turn functionality on or off in your customer dashboard.
        </Tooltip>
    );
    const eBay_settings = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set eBay Settings
        </Tooltip>
    );
    const Email = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Configure your email settings.
        </Tooltip>
    );
    const Anywhere_settings = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set Anywhere Cart Settings
        </Tooltip>
    );
    return (
        <Row className="mt-0 g-3">
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Custom_domains_details} >
                    
                        <div className="box-hight">
                            <Icon icon="streamline:computer-database-server-3-server-network-internet" width="30" className="me-2" />Custom Domains Details
                        </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={eBay_settings} >
                    
                        <div className="box-hight">
                            <Icon icon="jam:ebay" width="50" className="me-2" />eBay Settings
                        </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Email} >
                    
                        <div className="box-hight">
                            <Icon icon="ic:baseline-alternate-email" width="30" className="me-2" />Email
                        </div>
                    
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Anywhere_settings} >
                    
                        <div className="box-hight">
                            <Icon icon="material-symbols:add-shopping-cart-rounded" width="30" className="me-2" />Anywhere Cart Settings
                        </div>
                    
                </OverlayTrigger>
            </Col>
        </Row>
    )
};

export default Tab_Three;
