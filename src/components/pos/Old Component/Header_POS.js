import React from 'react'
import { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import '../../css/pos/pos_style.scss';

export default function Header_POS() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [message, setMessage] = useState('');

    const [posName, setPosName] = useState('POS');

    const [updated, setUpdated] = useState(message);
    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        if (message == '') {

            alert('Please enter the name'); return;
        }
        // "message" stores input field value
        setUpdated(message);
        setPosName(message);
        setShow(false);
    }
    return (
        <>
            <Navbar bg="light" expand="lg" className='pos_header'>
                <Container fluid>
                    <div className='custom_name navbar-brand'>
                        <a href="#" className='pos_hamburger'><Icon icon="icon-park-outline:hamburger-button" /></a>
                        <div className='PosModal'>
                            <a href="#" variant="primary" onClick={handleShow}>
                                {posName}
                            </a>
                            <Modal className='pos_cus_name' size="sm" show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header >
                                    <form action="">
                                        <input className="main" type="text" id="pos_id" placeholder='POS' onChange={handleChange} value={message} />
                                        <div className='pos_cus_name_btn'>
                                            <Button className='pos_cus_name_cancel_btn' variant="danger" size="sm" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button className='pos_cus_name_save_btn' variant="success" size="sm" onClick={handleClick}>
                                                Done
                                            </Button>
                                        </div>
                                    </form>

                                </Modal.Header>
                                <Modal.Body style={!(message.length > 0) ? { display: 'block' } : { display: 'none' }}>{!(message.length > 0) ? <ul>
                                    <li>Designer Team</li>
                                    <li>PHP Team</li>
                                    <li>Android Team</li>
                                    <li>IOS Team</li>
                                    <li>Hiecor Project</li>
                                    <li>React Project</li>
                                    <li>POS</li>
                                    <li>IOS Mobile</li>
                                    <li>Android Mobile</li>
                                    <li>Samsung Mobile</li>
                                 </ul> : " "}
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="">
                            <Nav.Link href="#home" className='cus_pos_nav'><Icon icon="mdi:monitor-dashboard" /> <span>Dashboard</span></Nav.Link>
                            <Nav.Link href="#home" className='cus_pos_nav'><Icon icon="mdi:home-outline" /> <span>Home</span></Nav.Link>
                            <Nav.Link href="#home" className='cus_pos_nav'><Icon icon="mdi:lock-outline" /> <span>Lock</span></Nav.Link>
                            <Nav.Link href="#link" className='cus_pos_nav'><Icon icon="lucide:refresh-cw" /> <span>Refresh</span></Nav.Link>
                            <Nav.Link href="#link" className='cus_pos_nav cus_pos_login'><Icon icon="fad:powerswitch" /></Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    )
}
