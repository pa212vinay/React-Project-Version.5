import * as React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Logo_blue from '../../assets/logo.png';
import Logo_white from '../../assets/white_logo.png';
import './login.scss';

const Login = () => {

    return (
        <>
            <div className="login-page bg-light">
                <Container>
                    <Row>
                        <Col xxl={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} sm={12} xs={12} >
                            <div className="bg-white shadow">
                                <Row className="row">
                                    <Col xxl={5} xl={5} lg={5} md={5} sm={12} xs={12} classNameName="pe-0">
                                        <div className="form-left  p-5">
                                            <img src={Logo_blue} alt="globe" className='Logo_blue mx-auto'/>
                                            <h3>LOG IN</h3>
                                            <p>Welcome to Hiecor, Please Put your  Login Credentials below to start using the app</p>
                                            <form className="row g-4">
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <label>Username<span className="text-danger">*</span></label>
                                                    <div className="input-group mt-2">
                                                        <input type="text" className="form-control" placeholder="Enter Username" />
                                                    </div>
                                                </Col>

                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <label>Password<span className="text-danger">*</span></label>
                                                    <div className="input-group mt-2">
                                                        <input type="text" className="form-control" placeholder="Enter Password" />
                                                    </div>
                                                </Col>

                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                                        <label className="form-check-label" for="inlineFormCheck">Remember me</label>
                                                    </div>
                                                </Col>

                                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                    <a href="#" className="float-end text-primary">Forgot Password?</a>
                                                </Col>

                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <Link to="/Customer_Dashboard">
                                                    <button type="submit" className="btn-hover color-3 px-4 float-end mt-4">login</button>
                                                    </Link>
                                                </Col>
                                            </form>
                                        </div>
                                    </Col>
                                    <Col classNameName="ps-0 d-none d-md-block">
                                        <div className=" h-100 bg_color_blue p-3 d-flex align-items-center justify-content-center">
                                            <div className='Logo_white'>
                                                <img src={Logo_white} alt="globe" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Login;