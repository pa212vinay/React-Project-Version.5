import React, { useState, useRef } from "react";
import { Form, Row, Col, Table } from 'react-bootstrap';
import { MdPlayArrow } from "react-icons/md";

import EmailEditor from 'react-email-editor';
// import Emailer from './Emailer';

const Email_Inner = () => {

    const [editor, setEditor] = useState(false);

    const emailEditorRef = useRef(null)
    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { html } = data;
            console.log('exportHtml', html);
        });
    };

    const onLoad = () => {
    }

    const onReady = () => {
        console.log('onReady');
    };
    return (
        <>
            <div className="container-fluid">
                <div className="bg_col mt-2">
                    <Row>

                        <div className="col-md-12">
                            <div className="mt-3 contact">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th><Form.Check inline name="group1" /></th>
                                            <th></th>
                                            <th>ID</th>
                                            <th>Type</th>
                                            <th>Name</th>
                                            <th>Subject</th>
                                            <th>Create Date</th>
                                            <th>Send Date</th>
                                            <th>Recurring</th>
                                            <th>Status</th>
                                            <th>Emails Opened</th>
                                            <th>Links Clicked</th>
                                            <th>Emails In Queue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td><MdPlayArrow onClick={() => setEditor(!editor)} /></td>
                                            <td>Marketing</td>
                                            <td>Test</td>
                                            <td>Test v</td>
                                            <td>12/12/2021</td>
                                            <td>13/12/2021</td>
                                            <td>No</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>
                                        {
                                            editor ?
                                                <tr>
                                                    <td colSpan={13}>
                                                        <Row>
                                                            
                                                            <Col md={12}>
                                                                <div className="bg_col p-3">
                                                                    <Row>
                                                                        <Col md-={2}>
                                                                            <div >
                                                                                {/* <Emailer/> */}
                                                                            </div>
                                                                        </Col>
                                                                        <Col md-={10}>
                                                                            <div >
                                                                                <div>
                                                                                    <button className="btn-hover color-3" onClick={exportHtml}>Export HTML</button>
                                                                                </div>
                                                                                <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </td>
                                                </tr>
                                                : null
                                        }
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td><MdPlayArrow /></td>
                                            <td>Marketing</td>
                                            <td>Test</td>
                                            <td>Test v</td>
                                            <td>12/12/2021</td>
                                            <td>13/12/2021</td>
                                            <td>No</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>

                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td><MdPlayArrow /></td>
                                            <td>Marketing</td>
                                            <td>Test</td>
                                            <td>Test v</td>
                                            <td>12/12/2021</td>
                                            <td>13/12/2021</td>
                                            <td>No</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>

                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td><MdPlayArrow /></td>
                                            <td>Marketing</td>
                                            <td>Test</td>
                                            <td>Test v</td>
                                            <td>12/12/2021</td>
                                            <td>13/12/2021</td>
                                            <td>No</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>

                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td><MdPlayArrow /></td>
                                            <td>Marketing</td>
                                            <td>Test</td>
                                            <td>Test v</td>
                                            <td>12/12/2021</td>
                                            <td>13/12/2021</td>
                                            <td>No</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>1</td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    );
}
export default Email_Inner;
