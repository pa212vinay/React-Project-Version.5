import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import './css/responsive.scss';
import './css/dashboard.scss';
import './css/index.scss'

import Layout from './components/common/Layout';
import Customer_Dashboard from "./components/customer/dashboard_components/Customer_Dashboard";
import Invoice from './components/customer/orders_details/Invoice';
import Attachment from './components/customer/attachment/Attachment';
import Subscription from './components/customer/subscription/Subscription';
import Customer_Pickup from './components/customer/customer_pickup/Customer_Pickup';
import Note from './components/customer/node/Note';
import Workflow from './components/customer/workflow/Workflow_Inner';

import Auth_Capture from './components/customer/orders/Auth_Capture';
import Declined from './components/customer/orders/Declined';
import Refund from './components/customer/orders/Refund';
import Pending from './components/customer/orders/Pending';
import Completed from './components/customer/orders/Completed';
import Error from './components/customer/orders/Error';

import Transaction from './components/customer/orders_details/Transaction';
import Tracking_Info from './components/customer/orders_details/Tracking_Info';
import Update_Invoice from './components/customer/orders_details/Update_Invoice';

import Adjust_Product from './components/customer/Adjust_Product';
import Create_Invoice from './components/customer/Create_Invoice';
import Chargeback from './components/customer/dashboard_components/Chargeback';
import Contact_Cutomer from './components/customer/customer_contact/Contact_Cutomer';
import Ticket from './components/customer/dashboard_components/Ticket';
import Products_Purchased from './components/customer/dashboard_components/Products_Purchased';
// import Emailer from './components/customer/Emailer';
import Customer_Service from './components/customer/Customer_Service';

// -----Contact-------
import Contact from "./components/contact/Contact";
import New_Details from "./components/contact/New_Details";
import Import_Contact from "./components/contact/Import_Contact";
import Contact_Email from "./components/contact/Contact_Email";
import Contact_Phone from "./components/contact/Contact_Phone";
import Contact_Company from "./components/contact/Contact_Company";
import Contact_Name from "./components/contact/Contact_Name";

// -----Social-------
import Social from './components/social/Social';
import Social_Comment from './components/social/Social_Comment';
import Social_PostScheduled from './components/social/Social_PostScheduled';
import Social_New from './components/social/Social_New';

//-----Inventory------- 
import Inventory from './components/inventory/Inventory';
import Product_Details from './components/inventory/Product_Details';
import Advanced from './components/inventory/Advanced';
import Shipping from './components/inventory/Shipping';
import Supplier from './components/inventory/Supplier';
import Log from './components/inventory/Log';
import Trail from './components/inventory/Trail';
import Bundle_Product from './components/inventory/Bundle_Product';
import New_Order from './components/inventory/New_Order';
import Parts_Lookup from './components/inventory/Parts_Lookup';

//-----Email------- 
import Email from './components/email/Email';
import { EmailRounded } from "@mui/icons-material";

// -----Fulfillment------- 
import Fulfillment from './components/fulfillment/Fulfillment';

// -----Pos------- 
import PosLayout from "./components/pos/PosLayout";

// -----Report------- 
import Report from './components/report/Report';

// -----Tracking------- 
import Tracking from './components/tracking/Tracking';

// -----Dashboard------- 
import Dashboard from './components/dashboard/Dashboard';




function App() {
  return (
    <>

      <div className='appnew'>
        <Router>
          <Routes>
            <Route>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Customer_Dashboard />} />
                <Route path="/Invoice" element={<Invoice />} />
                <Route path="/Attachment" element={<Attachment />} />
                <Route path="/Subscription" element={<Subscription />} />
                <Route path="/Customer_Pickup" element={<Customer_Pickup />} />
                <Route path="/Note" element={<Note />} />
                <Route path="/Workflow" element={<Workflow />} />

                <Route path="/Auth_Capture" element={<Auth_Capture />} />
                <Route path="/Declined" element={<Declined />} />
                <Route path="/Refund" element={<Refund />} />
                <Route path="/Pending" element={<Pending />} />
                <Route path="/Completed" element={<Completed />} />

                <Route path="/Transaction" element={<Transaction />} />
                <Route path="/Tracking_Info" element={<Tracking_Info />} />


                <Route path="/Chargeback" element={<Chargeback />} />
                <Route path="/Products_Purchased" element={<Products_Purchased />} />
                <Route path="/Emailer" element={<EmailRounded />} />
                <Route path="/Error" element={<Error />} />
                <Route path="/Customer_Service" element={<Customer_Service />} />
                <Route path="/Contact_Cutomer" element={<Contact_Cutomer />} />
                <Route path="/Ticket" element={<Ticket />} />

                {/* ---------Contact----------- */}
                <Route path="/Contact" element={<Contact />} />
                <Route path="/New_Details" element={<New_Details />} />
                <Route path="/Import_Contact" element={<Import_Contact />} />
                <Route path="/Contact_Email" element={<Contact_Email />} />
                <Route path="/Contact_Phone" element={<Contact_Phone />} />
                <Route path="/Contact_Company" element={<Contact_Company />} />
                <Route path="/Contact_Name" element={<Contact_Name />} />

                {/* -----Social------- */}
                <Route path="/Social" element={<Social />} />
                <Route path="/Social_Comment" element={<Social_Comment />} />
                <Route path="/Social_PostScheduled" element={<Social_PostScheduled />} />
                <Route path="/Social_New" element={<Social_New />} />

                {/* -----Inventory------- */}
                <Route path="/Inventory" element={<Inventory />} />
                <Route path="/Product_Details" element={<Product_Details />} />
                <Route path="/Advanced" element={<Advanced />} />
                <Route path="/Shipping" element={<Shipping />} />
                <Route path="/Supplier" element={<Supplier />} />
                <Route path="/Log" element={<Log />} />
                <Route path="/Trail" element={<Trail />} />
                <Route path="/Bundle_Product" element={<Bundle_Product />} />
                <Route path="/New_Order" element={<New_Order />} />
                <Route path="/Parts_Lookup" element={<Parts_Lookup />} />

                {/* -----Email------- */}
                <Route path="/Email" element={<Email />} />

                {/* -----Fulfillment------- */}
                <Route path="/Fulfillment" element={<Fulfillment />} />

                {/* -----Report------- */}
                <Route path="/Report" element={<Report />} />

                {/* -----Tracking------- */}
                <Route path="/Tracking" element={<Tracking />} />

                 {/* -----Dashboard------- */}
                 <Route path="/Dashboard" element={<Dashboard />} />
              </Route>


              <Route path="/Create_Invoice" element={<Create_Invoice />} />
              <Route path="/Update_Invoice" element={<Update_Invoice />} />
              <Route path="/Adjust_Product" element={<Adjust_Product />} />
              <Route path="/PosLayout" element={<PosLayout />} />

            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;