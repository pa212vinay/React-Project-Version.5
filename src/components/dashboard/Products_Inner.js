
import { Row, Table, Form, Col } from 'react-bootstrap';
// import BarChartY from './BarChartY.js';
import PieChart from './PieChart.js';
import LineChart from './LineChart.js';

const Products_Inner = () => {

  return (
    <>
      <Row className="g-3 hightCanvas mt-1">
        <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <h6 className='fw-bold'></h6>
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
        <div className=" col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <Row className='g-3'>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}> <PieChart /> </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}> <PieChart /> </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}> <PieChart /> </Col>
            </Row>
          </div>
        </div>
        <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100 d-flex justify-content-center align-items-center'>
            <Row className='g-3'>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className='p-4 bg-gray text-center bg_color_lightblue rounded-3'>
                  <lable class='fw-bold'>Department</lable>
                  <p className="mt-3">Electronics</p>
                </div>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className='p-4 bg-gray text-center bg_color_lightblue rounded-3'>
                  <lable class='fw-bold'>Supplier</lable>
                  <p className="mt-3">Amazon</p>
                </div>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className='p-4 bg-gray text-center bg_color_lightblue rounded-3'>
                  <lable class='fw-bold'>Brand</lable>
                  <p className="mt-3">Custom1</p>
                </div>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className='p-4 bg-gray text-center bg_color_lightblue rounded-3'>
                  <lable class='fw-bold'>Brand</lable>
                  <p className="mt-3">Custom1</p>
                </div>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className='p-4 bg-gray text-center bg_color_lightblue rounded-3'>
                  <lable class='fw-bold'>Restock Level</lable>
                  <p className="mt-3">0</p>
                </div>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className='p-4 bg-gray text-center bg_color_lightblue rounded-3'>
                  <lable class='fw-bold'>Stock</lable>
                  <p className="mt-3">0</p>
                </div>
              </Col>
            </Row>
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
export default Products_Inner;