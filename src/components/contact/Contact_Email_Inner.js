import React from 'react';
import { Row, Card, Form } from "react-bootstrap";
const Contact_Email_Inner = () => {
  return (
    <>
      <div className="row g-3">
        <div className='mt-5'>
          <Row>
            <div className='col-6'><Form.Check inline name="group1" label="Select All" /></div>
            <div className='col-6'>
              <div className="form-group cus-form-group">
                <Form.Control placeholder="Search" className='fill-input' />
                <label htmlFor="shipping" className='float-label'>Search</label>
              </div>
            </div>
          </Row>
        </div>


        <Row className='g-3'>
          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12 ">
            <div className='bg_col p-3'>
              <h6 className='fw-bold'>aa@gmail.com</h6>
              <ul class="list-inline mb-0 p-2">
                <li class="list-inline-item"> <Form.Check type="radio" aria-label="radio" id="check1" /></li>
                <li class="list-inline-item"><span className='fw-bold'>UserID - </span><a href="">71377332</a></li>
                <li class="list-inline-item"><span className='fw-bold'>Phone - </span>8602602312</li>
                <li class="list-inline-item"><span className='fw-bold'>Email - </span>aa@gmail.com</li>
              </ul>
              <ul class="list-inline mb-0 p-2">
                <li class="list-inline-item"> <Form.Check type="radio" aria-label="radio1" id="check2" /></li>
                <li class="list-inline-item"><span className='fw-bold'>UserID  - </span><a href="">71377332</a></li>
                <li class="list-inline-item"><span className='fw-bold'>Phone - </span>8602602312</li>
                <li class="list-inline-item"><span className='fw-bold'>Email - </span>aa@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 ">
            <div className='bg_col p-3'>
              <h6 className='fw-bold'>ab@gmail.com</h6>
              <ul class="list-inline mb-0 p-2">
                <li class="list-inline-item"> <Form.Check type="radio" aria-label="radio2" id="check3" /></li>
                <li class="list-inline-item"><span className='fw-bold'>UserID - </span><a href="">71377332</a></li>
                <li class="list-inline-item"><span className='fw-bold'>Phone - </span>8602602312</li>
                <li class="list-inline-item"><span className='fw-bold'>Email - </span>ab@gmail.com</li>
              </ul>
              <ul class="list-inline mb-0 p-2">
                <li class="list-inline-item"> <Form.Check type="radio" aria-label="radio3" id="check4" /></li>
                <li class="list-inline-item"><span className='fw-bold'>UserID - </span><a href="">71377333</a></li>
                <li class="list-inline-item"><span className='fw-bold'>Phone - </span>8602602312</li>
                <li class="list-inline-item"><span className='fw-bold'>Email - </span>ab@gmail.com</li>
              </ul>
            </div>
          </div>



          <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 ">
            <div className='bg_col p-3'>
              <h6 className='fw-bold'>corcrmuser1@gmail.com</h6>
              <ul class="list-inline mb-0 p-2">
                <li class="list-inline-item"> <Form.Check type="radio" aria-label="radio4" id="check5" /></li>
                <li class="list-inline-item"><span className='fw-bold'>UserID - </span><a href="">71377332</a></li>
                <li class="list-inline-item"><span className='fw-bold'>Email - </span>ab@gmail.com</li>
              </ul>
              <ul class="list-inline mb-0 p-2 text-wrap">
                <li class="list-inline-item"> <Form.Check type="radio" aria-label="radio5" id="check6" /></li>
                <li class="list-inline-item"><span className='fw-bold'>UserID - </span><a href="">71377332</a></li>
                <li class="list-inline-item"><span className='fw-bold'>Phone - </span>9999999999</li>
                <li class="list-inline-item"><span className='fw-bold'>Company - </span>Hiecor</li>
                <li class="list-inline-item"><span className='fw-bold'>Email - </span>corcrmuser1@gmail.com</li>
              </ul>
              <ul class="list-inline mb-0 p-2">
                <li class="list-inline-item"> <Form.Check type="radio" aria-label="radio6" id="check7" /></li>
                <li class="list-inline-item"><span className='fw-bold'>UserID</span><a href="">71377332</a></li>
                <li class="list-inline-item"><span className='fw-bold'>Email</span> - ab@gmail.com</li>
              </ul>
            </div>

          </div>


          <div className='row mt-3 g-3'>
            <div className='col-md-6'>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='col-md-6'>
              <button className="btn-hover color-3 r_mt-2 float-end">Merge</button>
              <button className="btn-hover color-1 me-2 float-end">Reset</button>
            </div>
          </div>
        </Row>


      </div>
    </>
  );
}
export default Contact_Email_Inner;
