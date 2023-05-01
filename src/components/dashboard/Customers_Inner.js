import React from "react";
import { Row, Table, Form } from 'react-bootstrap';
import LineChart from './LineChart.js';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Customers = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <Row className="g-3 hightCanvas mt-1">
        <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <Table responsive>
              <thead>
                <tr>
                  <th> <Form.Check inline name="group1" /></th>
                  <th>ID</th>
                  <th>Order ID</th>
                  <th>Date/Time</th>
                  <th>Created Form</th>
                  <th>Loged by</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>1</td>
                  <td>11</td>
                  <td>menual testing</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>

                </tr>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>2</td>
                  <td>22</td>
                  <td>menual testing</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                </tr>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>3</td>
                  <td>33</td>
                  <td>menual testing</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                </tr>
                <tr>
                  <td><Form.Check inline name="group1" /></td>
                  <td>4</td>
                  <td>44</td>
                  <td>menual testing</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                  <td>$399.00</td>
                </tr>
              </tbody>
            </Table>
            <div className="row table_pagination">
              <div className="col">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                  </ul>
                </nav>
              </div>
              <div className="col">
                <nav aria-label="Page navigation example">
                  <ul class="pagination float-end">
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
            </div>
          </div>
        </div>
        <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <div style={{ height: '100%', width: '100%' }}>
            </div>
          </div>
        </div>
        <div className=" col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <LineChart />
          </div>
        </div>
        <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <LineChart />
          </div>
        </div>

      </Row>
    </>
  );
}
export default Customers;
