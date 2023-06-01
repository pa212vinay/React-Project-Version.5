import React from "react";
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

const Tab_Seven = () => {

    const Social_media = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link your social media accounts.
        </Tooltip>
    );
    const Subscription = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Configure settings for subscriptions. Determine next action if an automatic payment failed.
        </Tooltip>
    );
    const Taxes = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set up tax rates to be used for incoming orders.
        </Tooltip>
    );
    const Receipt_setup = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Configure your receipt print setup. This includes receipt width, verbiage, and contents.
        </Tooltip>
    );

    return (

        <Row className="mt-0 g-3">
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Receipt_setup} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="fluent:receipt-32-regular" width="30" className="me-2" />Receipt Setup
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Social_media} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="healthicons:social-work-outline" width="30" className="me-2" />Social Media
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Subscription} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="wpf:renew-subscription" width="30" className="me-2" />Subscription
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Taxes} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="heroicons-outline:receipt-tax" width="30" className="me-2" />Taxes
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
        </Row>
    )
};

export default Tab_Seven;
