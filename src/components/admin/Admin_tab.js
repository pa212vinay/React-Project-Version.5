import React from "react";
import "./Admin.scss"
import { Row, Col } from "react-bootstrap";
import Tab_One from "./Tab_One";
import Tab_Two from "./Tab_Two";
import Tab_Three from "./Tab_Three";
import Tab_Four from "./Tab_Four";
import Tab_Five from "./Tab_Five";
import Tab_Six from "./Tab_Six";
import Tab_Seven from "./Tab_Seven";
import Tab_Eight from "./Tab_Eight";






const Admin_tab = () => {


    return (
        <div className="bg_col Admin_tab p-3">
            <Row className="g-3">
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h3>System Settings</h3>
                    <p>In this section, you can view and configure all settings for HieCOR.<br /> Choose a setting from the left menu, or read about the settings below to get started.</p>
                </Col>
            </Row>
            <Tab_One />
            <Tab_Two />
            <Tab_Three />
            <Tab_Four />
            <Tab_Five />
            <Tab_Six />
            <Tab_Seven />
            <Tab_Eight />
        </div>
    )
};

export default Admin_tab;
