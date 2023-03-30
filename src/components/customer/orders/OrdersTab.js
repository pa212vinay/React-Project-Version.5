import { Form, Row } from 'react-bootstrap';
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const newOrder = () => {

  return (
    <div className="p-3 bg_col_100h mt-3">
      <Row className='orderTab g-3'>
        <div className="col-lg-12">
          <Form.Control size="lg" type="text" placeholder="Normal text" className='orderSerch' />
        </div>
        {/* <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='text-decoration-none '>
            <Card className='border-0  card_order1'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className='txt_black'>
                  <div className="icon_carban">
                    <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                  </div>
                  <div className='fw-bold font-18'>
                    <div className='cusOrderId'>#8812 <span className='cusOrderDate'>12/06/2023</span> </div>
                    <span className='mb-0'>$322.00</span></div>
                </div>
                <div className='invoice_type'>
                  <span className=' '>INVOICE<BsChevronRight /></span>
                </div>
              </div>
            </Card>
          </Link>
        </div> */}
        <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='cusOrderTab'>
            <div className='cusIdDate'>
              <span className='cusOrderId'>#8813  </span>
              <span className='cusOrderDate'>12/06/2023</span>
            </div>
            <div className='cusInvoicePrice'>
              <span className='cusTypeInvoice'>INVOICE<BsChevronRight /></span>
              <span className='cusInvoiceValue'>$322.00</span>
            </div>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='cusOrderTab'>
            <div className='cusIdDate'>
              <span className='cusOrderId'>#8814  </span>
              <span className='cusOrderDate'>11/06/2023</span>
            </div>
            <div className='cusInvoicePrice'>
              <span className='cusTypeInvoice'>Auth_capture<BsChevronRight /></span>
              <span className='cusInvoiceValue'>$302.00</span>
            </div>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='cusOrderTab'>
            <div className='cusIdDate'>
              <span className='cusOrderId'>#8830  </span>
              <span className='cusOrderDate'>02/07/2023</span>
            </div>
            <div className='cusInvoicePrice'>
              <span className='cusTypeInvoice'>Declined<BsChevronRight /></span>
              <span className='cusInvoiceValue'>$122.00</span>
            </div>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='cusOrderTab'>
            <div className='cusIdDate'>
              <span className='cusOrderId'>#8013  </span>
              <span className='cusOrderDate'>15/06/2023</span>
            </div>
            <div className='cusInvoicePrice'>
              <span className='cusTypeInvoice'>Error<BsChevronRight /></span>
              <span className='cusInvoiceValue'>$322.00</span>
            </div>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='cusOrderTab'>
            <div className='cusIdDate'>
              <span className='cusOrderId'>#8823  </span>
              <span className='cusOrderDate'>12/06/2023</span>
            </div>
            <div className='cusInvoicePrice'>
              <span className='cusTypeInvoice'>Completed<BsChevronRight /></span>
              <span className='cusInvoiceValue'>$332.00</span>
            </div>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='cusOrderTab'>
            <div className='cusIdDate'>
              <span className='cusOrderId'>#8803  </span>
              <span className='cusOrderDate'>16/06/2023</span>
            </div>
            <div className='cusInvoicePrice'>
              <span className='cusTypeInvoice'>Refund_Partial<BsChevronRight /></span>
              <span className='cusInvoiceValue'>$532.00</span>
            </div>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Invoice" className='cusOrderTab'>
            <div className='cusIdDate'>
              <span className='cusOrderId'>#8523  </span>
              <span className='cusOrderDate'>08/06/2023</span>
            </div>
            <div className='cusInvoicePrice'>
              <span className='cusTypeInvoice'>Pending<BsChevronRight /></span>
              <span className='cusInvoiceValue'>$332.00</span>
            </div>
          </Link>
        </div>
        {/* <div className="col-xl-12 col-lg-6">
          <Link to="/Auth_capture" className='text-decoration-none '>
            <Card className='border-0  card_order2'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div className='txt_black'>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText '>AUTH_CAPTURE<BsChevronRight /></span>
                  <p className='mb-0'>$322.00</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Declined" className='text-decoration-none '>
            <Card className='border-0  card_order3'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div className='txt_black'>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText '>DECLINED<BsChevronRight /></span>
                  <p className='mb-0'>$322.00</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Error" className='text-decoration-none '>
            <Card className='border-0  card_order4'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div className='txt_black'>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText '>ERROR<BsChevronRight /></span>
                  <p className='mb-0'>$322.00</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Completed" className='text-decoration-none '>
            <Card className='border-0  card_order5'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban_white} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div className='txt_black'>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText '>COMPLETED<BsChevronRight /></span>
                  <p className='mb-0'>$322.00</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Refund" className='text-decoration-none '>
            <Card className='border-0  card_order1'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div className='txt_black'>
                  <div className='fw-bold font-18'>#6846  /12/07/2022</div>
                  <span className='orderText '>REFUND_PARTIAL<BsChevronRight /></span>
                  <p className='mb-0'>$703.90</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
        <div className="col-xl-12 col-lg-6">
          <Link to="/Pending" className='text-decoration-none '>
            <Card className='border-0  card_order2'>
              <div className='d-flex imguser bg_card_order position-relative'>
                <div className="icon_carban">
                  <img src={carban} alt="user" className='ms-2 me-3 orderimg' />
                </div>
                <div className='txt_black'>
                  <div className='fw-bold font-18'>2/$0.00</div>
                  <span className='orderText '>PENDING<BsChevronRight /></span>
                  <p className='mb-0'>$322.00</p>
                </div>
              </div>
            </Card>
          </Link>
        </div> */}

      </Row>
    </div>
  );
}
export default newOrder;