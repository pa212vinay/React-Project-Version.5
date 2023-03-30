import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdOutlineDeleteForever } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import '../../../css/utility/_utility-dir.scss'

const Customer_Details = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [Delete, set7Show] = useState(false);
  return (
    <>
      <Modal size="md" show={Delete} onHide={() => set7Show(false)} aria-labelledby="example-modal-4">
        <div className="px-4">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-4">
              <h6 className="fw-bold">Delete</h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete customer tax ?
          </Modal.Body>
          <Modal.Footer>
            <div className="float-end mb-2 mt-4">
              <button className="btn-hover color-1 me-2">No</button>
              <button className="btn-hover color-2 r_mt-2">Yes</button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
      <div className="p-3 bg_col mt-3">
        <Row className="g-3">
          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-4">
            <Card className='border-0'>
              <div className='imguser bg_card red_light'>
                <div>
                  <div className='semibold gray  '>User ID</div>
                  <span className='cursor' ref={target} onClick={() => setShow(!show)}>71376316</span>
                  <Overlay target={target.current} show={show} placement="top">
                    {(props) => (
                      <Tooltip id="overlay-example" {...props} className="tooltip_Tab">
                        <div className='p-3 form'>
                              <h5 className='text-start text-black mb-3'>Order</h5>
                          <div className="form-group cus-form-group">
                            <Form.Control placeholder="User ID" className='fill-input' />
                            <label htmlFor="shipping" className='float-label'>User ID</label>
                          </div>
                          <button className="btn-hover color-2 mt-3 me-2"><FaCheck /></button>
                          <button className="btn-hover color-1 mt-3"><ImCross /></button>
                        </div>
                      </Tooltip>
                    )}
                  </Overlay>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-4 ">
            <Card className='border-0'>
              <div className='imguser bg_card green_light'>
                <div>
                  <div className='semibold gray '>Owner</div>
                  <span className='gray '>nikesh hiecor</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-4 ">
            <Card className='border-0'>
              <div className='imguser bg_card pink_light'>
                <div>
                  <div className='semibold gray '>Custom Tax</div>
                  <span className='gray '>Country-Wide Tax<MdOutlineDeleteForever className='ms-2 color_red cursor' onClick={() => set7Show(true)} /></span>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-4 ">
            <Card className='border-0'>
              <div className='imguser bg_card grey_light'>
                <div>
                  <div className='semibold gray  '>Customer Status</div>
                  <span className='gray '>Property Owner</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-4 ">
            <Card className='border-0'>
              <div className='imguser bg_card gama_green_light'>
                <div>
                  <div className='semibold gray  '>Coupon Code</div>
                  <span className='gray '>Select</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-4 ">
            <Card className='border-0'>
              <div className='imguser bg_card purpal_light'>
                <div>
                  <div className='semibold gray  '>Customer Tags</div>
                  <span className='gray '>Select</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-4">
            <Card className='mb-2 border-0'>
              <div className='imguser bg_card red_light_20'>
                <div>
                  <div className='semibold gray  '>Customer Type</div>
                  <span className='gray '>Individual</span>
                </div>
              </div>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
}
export default Customer_Details;

