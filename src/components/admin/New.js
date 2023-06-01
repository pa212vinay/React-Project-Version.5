import React from "react"
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";

const New = () => {

   
    const Setting_tab = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            This section contains site-wide general information about your business including company name, logo, and more.
        </Tooltip>
    );
    const Manage_users = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Here, you can add or edit any user account. You can set custom permissions for each user, restore/change a password, or unlock an account.
        </Tooltip>
    );
    const Website = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Generate & manage your own Website with a built in eCommerce Store.
        </Tooltip>
    );
    const Affiliate_Tracking = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Place this HTML on any website page to enable advanced tracking.
        </Tooltip>
    );



    return (
        <Row className="g-3">
                
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Setting_tab} >
                        <Link to='/Setting'>
                            <div className="box-hight">
                                <Icon icon="ant-design:setting-outlined" width="30" className="me-2" />System Settings
                            </div>
                        </Link>
                    </OverlayTrigger>
                </Col>

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Manage_users} >
                      
                            <div className="box-hight">
                                <Icon icon="carbon:id-management" width="30" className="me-2" />Manage Users
                            </div>
                      
                    </OverlayTrigger>
                </Col>

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Website} >
                      
                            <div className="box-hight">
                                <Icon icon="fluent-mdl2:website" width="30" className="me-2" />Website
                            </div>
                      
                    </OverlayTrigger>
                </Col>

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Affiliate_Tracking} >
                      
                            <div className="box-hight">
                                <Icon icon="arcticons:vtracking" width="30" className="me-2" />Affiliate Tracking
                            </div>
                      
                    </OverlayTrigger>
                </Col>
            </Row>
    )
};

export default New;
