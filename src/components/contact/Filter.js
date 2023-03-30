import { Form, Row, Col } from 'react-bootstrap';
import { CgClose } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

const Filter = () => {
  return (
    <>
      <div className='py-5 my-3 bg_color_lightblue'>
        <Row className='g-3'>
          <Col xl={2} md={12}>
            <h6 className='fw-bold'>Company</h6>
          </Col>
          <Col xl={7} md={12}>
            <Row className='g-3'>
              <div className="col-sm-5">
                <div className="form-group cus-select-group">
                  <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                    <option>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                  <label className='float-label' htmlFor="require_shipping">Select</label>
                  <IoMdArrowDropdown className='inputIcon' />
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-group cus-form-group">
                  <Form.Control placeholder="Zip" className='fill-input' />
                </div>
              </div>
              <div className="col-sm-2">
                <button className='btn-icon color-3'><CgClose /></button>
              </div>
            </Row>
          </Col>
          <Col xl={3} md={12}>
            <button class="btn-hover color-2 px-3 me-2 r_mt-2">Add filter</button>
            <button class="btn-hover color-2 px-3 me-2 r_mt-2">Search</button>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Filter;