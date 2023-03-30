import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiCommentEdit } from "react-icons/bi";
import { TbFileInvoice } from "react-icons/tb";
import { MdAlternateEmail, } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../../../css/utility/_utility-dir.scss'

const Orders = () => {

  return (
    <>

      <div className="p-3 bg_col mt-3">
        <Row className="g-3">
          <div className='col-lg-6 col-md-6 col-xl-12 col-xxl-12 col-sm-12'>
            <div className='bg_col'>
              <Card className='border-0'>
                <div className='d-flex imguser'>
                  <div className="icon_bg">
                    <BiCommentEdit />
                  </div>
                  <div>
                    <Link to="/Note" className='text-decoration-none'><div className='semibold gray  '>588/$179,979.06</div></Link>
                    <span className='gray '>Order</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-xl-12 col-xxl-12 col-sm-12'>
            <div className='bg_col'>
              <Card className='border-0'>
                <div className='d-flex imguser'>
                  <div className="icon_bg">
                    <BiCommentEdit />
                  </div>
                  <div>
                    <Link to="/Note" className='text-decoration-none'><div className='semibold gray  '>1252</div></Link>
                    <span className='gray '>Notes</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-xl-12 col-xxl-12 col-sm-12'>
            <div className='bg_col'>
              <Card className='border-0'>
                <div className='d-flex imguser'>
                  <div className="icon_bg">
                    <TbFileInvoice />
                  </div>
                  <div>
                    <Link to="/Invoice" className='text-decoration-none'><div className='semibold gray  '>11</div></Link>
                    <span className='gray '>Open Invoices</span>
                  </div>
                </div>
              </Card>
            </div>

          </div>
          <div className='col-lg-6 col-md-6 col-xl-12 col-xxl-12 col-sm-12'>
            <div className='bg_col'>
              <Card className='border-0'>
                <div className='d-flex imguser'>
                  <div className="icon_bg">
                    <MdAlternateEmail />
                  </div>
                  <div>
                    <Link to="/Note" className='text-decoration-none'><div className='semibold gray  '>78/6</div></Link>
                    <span className='gray '>Emails Sent</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-xl-12 col-xxl-12 col-sm-12'>
            <div className='bg_col'>
              <Card className='border-0'>
                <div className='d-flex imguser'>
                  <div className="icon_bg">
                    <FaRegMoneyBillAlt />
                  </div>
                  <div>
                    <Link to="/Note" className='text-decoration-none'><div className='semibold gray  '>0.00</div></Link>
                    <span className='gray '>Loyalty Balance</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Row>
      </div>

    </>
  );
}
export default Orders;

