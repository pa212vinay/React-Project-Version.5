import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
import { RiRefreshLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

const Social_Tab = () => {
    return (
        <>
            <Row className="">
                <Col md={7} xl={7}>
                    <div className="TabNav ">
                            <Nav variant="pills">
                                <Nav.Item className="r_mt-3">
                                    <NavLink to="/Social_Comment" eventKey="link-2.0">Comments</NavLink>
                                </Nav.Item>
                                <Nav.Item className="r_mt-3">
                                    <NavLink to="/Social_PostScheduled" eventKey="link-2.1">Post & Scheduled</NavLink>
                                </Nav.Item>
                            </Nav>
                    </div>
                </Col>
                <Col md={5} xl={5}>
                    <div className="float-end r_mt-3">
                        <Link to="/Social_New"className="">
                            <button className="btn-hover color-2 me-2 "><GoPlus className="me-2" />New</button>
                        </Link>
                        <Link to="/Social_New" className="r_mt-3">
                            <button className="btn-hover color-2 r_mt-3"><RiRefreshLine className="me-2" /> Text Goes Here </button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default Social_Tab;