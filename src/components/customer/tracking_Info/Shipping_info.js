import Row from 'react-bootstrap/Row';
import { HiOutlineRefresh, HiPlus } from "react-icons/hi";
import { Form, Button } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";

const Shipping_info= () => {
  return (
    <>
     <div className="p-3 bg_row mt-3">
            <h6 className='fw-bold mb-3'>SHIPPING INFO</h6>
            <span className='fw-bold mb-3'>SHIPMENT #166550</span>
            <div className='boxborder mt-3'>
              <span className='borderTxt'>Weight/Dimensions</span>
              <Row className='g-3'>
                <div className="col-sm-6">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="Weight" className='fill-input' />
                    <label htmlFor="ticket" className='float-label'>Weight</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="Length" className='fill-input' />
                    <label htmlFor="ticket" className='float-label'>Length</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="Height" className='fill-input' />
                    <label htmlFor="ticket" className='float-label'>Height</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group cus-form-group">
                    <Form.Control placeholder="Width" className='fill-input' />
                    <label htmlFor="ticket" className='float-label'>Width</label>
                  </div>
                </div>
              </Row>
            </div>

            <div className='boxborder mt-3'>
              <h6 className='fw-bold  mb-3'>SHIPPING CARRIER</h6>
              <Row className='g-3'>
                <div className="col-sm-5  col-md-5">
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Carrier</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Carrier</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
                <div className="col-sm-5 col-md-5">
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Service</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Service</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
                <div className="col-sm-2  col-md-2">
                  <Button className='refeshBtn'><HiOutlineRefresh /></Button>
                </div>
                <div className="col-sm-5 ">
                  <div className="form-group cus-select-group">
                    <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                      <option>Insurance</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Control>
                    <label className='float-label' htmlFor="require_shipping">Insurance</label>
                    <IoMdArrowDropdown className='inputIcon' />
                  </div>
                </div>
                <div className="col-sm-7 ">
                  <div className='font-15'><span className='fw-bold'>First Name:</span> <span className='gray'>Johne</span></div>
                </div>
                <div className='mt-4'>
                  <button class="btn-hover color-2 px-3 me-2">Purchase Postage and Print</button>
                  <button class="btn-hover color-1  me-2 r_mt-2" >Delete</button>
                  <button class="btn-hover color-3  md_mt-2" >Apply</button>
                  <button class="btn-hover color-3  float-end w-auto md_mt-2"><HiPlus />Shipment</button>
                </div>
              </Row>
            </div>
          </div>
    </>
  );
}
export default Shipping_info;