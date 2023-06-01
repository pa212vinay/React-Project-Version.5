import React from "react";
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

const Fraud_detection = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Enable and manage your Fraud Detection settings.
    </Tooltip>
);
const Fulfillment = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Link your fulfillment accounts to start shipping through HieCOR.
    </Tooltip>
);
const Google_setting = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Google calendar settings.
    </Tooltip>
);
const Invoice = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Configure your Invoice settings. Determine which payment methods are accepted for Invoice, set free shipping levels, configure terms and conditions, add footers, and more.
    </Tooltip>
);

const Tab_Four = () => {
    return (
        <Row className="mt-0 g-3">
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Fraud_detection} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="material-symbols:tamper-detection-on-outline-rounded" width="30" className="me-2" />Fraud Detection
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Fulfillment} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="tabler:truck-delivery" width="30" className="me-2" />Fulfillment
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Google_setting} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="uil:calender" width="30" className="me-2" />Google calendar settings
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Invoice} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="la:file-invoice-dollar" width="30" className="me-2" />Invoice
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>

        </Row>
    )
};

export default Tab_Four;
