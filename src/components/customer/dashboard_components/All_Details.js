import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { BiPurchaseTag } from "react-icons/bi";
import { RiUserVoiceLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { TiArrowBack } from "react-icons/ti";
import { HiOutlineTicket } from "react-icons/hi";
import { Link } from 'react-router-dom';
import '../../../css/utility/_utility-dir.scss'


const All_Details = () => {

  return (
    <>
      <div className="mt-3">
        <Row className='g-3'>
          <div className="col-xl-12 col-lg-6">
            <Link to="/Create_invoice" target='_blank' className='text-decoration-none'>
              <Card className=' border-0 side_list1'>
                <div className=' bg_card_side text-center'>
                  <div className="font-30 txt_color">
                    <TbFileInvoice className="text-white" />
                  </div>
                  <span className='font-17'>Create Invoice</span>
                </div>
              </Card>
            </Link>
          </div>

          <div className="col-xl-12 col-lg-6">
            <Link to="/Contact_Cutomer" className='text-decoration-none'>
              <Card className=' border-0 side_list2 '>
                <div className=' bg_card_side text-center'>
                  <div className="font-30 txt_color">
                    <RiUserVoiceLine className="text-white" />
                  </div>
                  <span className='font-17'>Contact Customer</span>
                </div>
              </Card>
            </Link>
          </div>

          <div className="col-xl-12 col-lg-6">
            <Link to="/Chargeback" className='text-decoration-none'>
              <Card className=' border-0 side_list3'>
                <div className=' bg_card_side text-center'>
                  <div className="font-30 txt_color">
                    <TiArrowBack className="text-white" />
                  </div>
                  <span className='font-17'>Chargeback/Fraud</span>
                </div>
              </Card>
            </Link>
          </div>

          <div className="col-xl-12 col-lg-6">
            <Link to="/Ticket" className='text-decoration-none'>
              <Card className=' border-0 side_list4'>
                <div className=' bg_card_side text-center'>
                  <div className="font-30 txt_color">
                    <HiOutlineTicket className="text-white" />
                  </div>
                  <span className='font-17'> Ticket </span>
                </div>
              </Card>
            </Link>
          </div>

          <div className="col-xl-12 col-lg-6">
            <Link to="/Products_purchased" className='text-decoration-none'>
              <Card className=' border-0 side_list5'>
                <div className=' bg_card_side text-center'>
                  <div className="font-30 txt_color">
                    <BiPurchaseTag className="text-white" />
                  </div>
                  <span className='font-17'>Products Purchased</span>
                </div>
              </Card>
            </Link>
          </div>
        </Row>
      </div>
    </>
  );
}
export default All_Details;

