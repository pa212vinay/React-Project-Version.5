import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import './css/responsive.scss';
import './css/dashboard.scss';
import './css/index.scss'

import Layout from './components/common/Layout';
import Dashboard from "./components/customer/Dashboard";
import Invoice from './components/customer/Invoice';
import Attachment from './components/customer/Attachment';
import Subscription from './components/customer/Subscription';
import Customer_Pickup from './components/customer/Customer_Pickup';
import Note from './components/customer/Note';
import Workflow from './components/customer/Workflow';

import Auth_Capture from './components/orders/Auth_Capture';
import Declined from './components/orders/Declined';
import Refund from './components/orders/Refund';
import Pending from './components/orders/Pending';
import Completed from './components/orders/Completed';
import Error from './components/orders/Error';

import Tab_Transaction from './components/customer/Tab_Section';
import Tab_Tracking from './components/customer/Tab_Tracking';
import Tracking_Info from './components/customer/Tracking_Info';
import Update_Invoice from './components/customer/Update_Invoice';

import Adjust_Product from './components/customer/Adjust_Product';
import Create_Invoice from './components/customer/Create_Invoice';
import Chargeback from './components/customer/Chargeback';
import Contact_Cutomer from './components/customer/Contact_Cutomer';
import Ticket from './components/customer/Ticket';
import Products_Purchased from './components/customer/Products_Purchased';
import Email from './components/customer/Email';
import Customer_Service from './components/customer/Customer_Service';


function App() {
  return (
    <>
      <div className='app_page'>
        <Router>
            <Routes>
              <Route>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
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
                  
                  <Route path="/Tab_Transaction" element={<Tab_Transaction />} />
                  <Route path="/Tracking_Info" element={<Tracking_Info />} />
                  <Route path="/Tab_Tracking" element={<Tab_Tracking />} />
                  
                  {/* <Route path="/Transaction" element={<Transaction />} /> */}
                  
                  <Route path="/Chargeback" element={<Chargeback />} />
                  <Route path="/Products_Purchased" element={<Products_Purchased />} />
                  <Route path="/Email" element={<Email />} />
                  <Route path="/Error" element={<Error />} />
                  <Route path="/Customer_Service" element={<Customer_Service />} />
                  <Route path="/Contact_Cutomer" element={<Contact_Cutomer />} />
                  <Route path="/Ticket" element={<Ticket />} />
                  
                </Route>
                <Route path="/Create_Invoice" element={<Create_Invoice />} />
                <Route path="/Update_Invoice" element={<Update_Invoice />} />
                <Route path="/Adjust_Product" element={<Adjust_Product />} />
              </Route>
            </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;