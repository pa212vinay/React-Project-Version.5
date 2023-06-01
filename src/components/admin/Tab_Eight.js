import React from "react"
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";


const Tab_Eight = () => {

    const Workflow = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create custom workflow actions & dispositions to manage interactions with your customers.
        </Tooltip>
    );
    const Zebra_barcode = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set up to print price labels for your products; upload and/or customize your existing price label templates.
        </Tooltip>
    );
    return (
        // <div className="bg_col Admin_tab p-3">

            <Row className="mt-0 g-3">

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Workflow} >
                        
                            <div className="box-hight">
                                <Icon icon="fa6-solid:network-wired" width="30" className="me-2" />Workflow
                            </div>
                        
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Zebra_barcode} >
                        
                            <div className="box-hight">
                                <Icon icon="ic:outline-barcode" width="30" className="me-2" />Zebra Barcode
                            </div>
                        
                    </OverlayTrigger>
                </Col>

            </Row>
        // </div>
    )
};

export default Tab_Eight;
