import React, { useState, useRef } from "react";
import { Form, Row, Col, Table } from 'react-bootstrap';
import { Icon } from '@iconify/react';

import EmailEditor from 'react-email-editor';

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
            <Row>

                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="bg_col p-3 contact">
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
                                    <td><Icon icon="ic:round-play-arrow" width={18} className='me-2' onClick={() => setEditor(!editor)} />1</td>
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
                                                
                                                        <div className="px-3 py-1">
                                                            <Row className="bg_col p-3">
                                                                <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12}>
                                                                    <div >
                                                                        {/* <Emailer/> */}
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={10} xl={10} lg={10} md={10} sm={12} xs={12}>
                                                                    <div>
                                                                        <button className="btn-hover color-3" onClick={exportHtml}>Export HTML</button>
                                                                        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                            </td>
                                        </tr>
                                        : null
                                }
                                <tr>
                                    <td><Form.Check inline name="group1" /></td>
                                    <td><Icon icon="ic:round-play-arrow" width={18} className='me-2' />2</td>
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
                                    <td><Icon icon="ic:round-play-arrow" width={18} className='me-2' />3</td>
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
                                    <td><Icon icon="ic:round-play-arrow" width={18} className='me-2' />4</td>
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
                                    <td><Icon icon="ic:round-play-arrow" width={18} className='me-2' />5</td>
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
        </>
    );
}
export default Email_Inner;
