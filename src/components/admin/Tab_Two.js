import React from "react"
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

const Tab_Two = () => {
    const Alerts = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create Custom Alerts.
        </Tooltip>
    );
    const Amazon_settings = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set Amazon Settings
        </Tooltip>
    );
    const Coupons = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create coupons and discounts that can be used in POS, or on Invoice payment (if enabled).
        </Tooltip>
    );
    const Custom_domains = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link your custom domain name.
        </Tooltip>
    );

    return (

        <Row className="mt-0 g-3">
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Alerts} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="arcticons:alertswiss" width="30" className="me-2" />Alerts
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Amazon_settings} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="uil:amazon" width="30" className="me-2" />Amazon Settings
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Coupons} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="mdi:coupon-outline" width="30" className="me-2" />Coupons
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
            <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Custom_domains} >
                    <Link>
                        <div className="box-hight">
                            <Icon icon="gridicons:domains" width="30" className="me-2" />Custom Domains
                        </div>
                    </Link>
                </OverlayTrigger>
            </Col>
        </Row>

    )
};

export default Tab_Two;
