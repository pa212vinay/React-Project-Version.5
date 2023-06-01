import React from "react"
import { Row, Col } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./Admin.scss"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from "react-router-dom";


const Admin_tab = () => {

    const Setting_tab = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            This section contains site-wide general information about your business including company name, logo, and more.
        </Tooltip>
    );
    const Manage_users = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Here, you can add or edit any user account. You can set custom permissions for each user, restore/change a password, or unlock an account.
        </Tooltip>
    );
    const Website = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Generate & manage your own Website with a built in eCommerce Store.
        </Tooltip>
    );
    const Affiliate_Tracking = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Place this HTML on any website page to enable advanced tracking.
        </Tooltip>
    );
    const Alerts = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create Custom Alerts.
        </Tooltip>
    );
    const Amazon_settings = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set Amazon Settings
        </Tooltip>
    );
    const Coupons = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create coupons and discounts that can be used in POS, or on Invoice payment (if enabled).
        </Tooltip>
    );
    const Custom_domains = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link your custom domain name.
        </Tooltip>
    );
    const Custom_domains_details = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Turn functionality on or off in your customer dashboard.
        </Tooltip>
    );
    const eBay_settings = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set eBay Settings
        </Tooltip>
    );
    const Email = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Configure your email settings.
        </Tooltip>
    );
    const Anywhere_settings = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set Anywhere Cart Settings
        </Tooltip>
    );
    const Fraud_detection = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Enable and manage your Fraud Detection settings.
        </Tooltip>
    );
    const Fulfillment = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link your fulfillment accounts to start shipping through HieCOR.
        </Tooltip>
    );
    const Google_setting = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Google calendar settings.
        </Tooltip>
    );
    const Invoice = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Configure your Invoice settings. Determine which payment methods are accepted for Invoice, set free shipping levels, configure terms and conditions, add footers, and more.
        </Tooltip>
    );
    const Locations = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Here, you can add any user Location.
        </Tooltip>
    );
    const Loyalty_program = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Customize how you give credit to loyal customers; configure how you let your customers accumulate and redeem points.
        </Tooltip>
    );
    const Merchant_accounts = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Integrate your payment gateway/credit card processor.
        </Tooltip>
    );
    const Order_status = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set up order status to be used for incoming orders.
        </Tooltip>
    );
    const POS = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            In this section you can configure POS: This includes your acceptable forms of payment, signature collection, out-of-stock scenario, line item discounts, and more.
        </Tooltip>
    );
    const PAX = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Integrate your EMV Chip Reader to be used with HieCOR.
        </Tooltip>
    );
    const QuickBooks = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link your QuickBooks Desktop or Online account and set up sync from HieCOR.
        </Tooltip>
    );
    const Receipt_setup = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Configure your receipt print setup. This includes receipt width, verbiage, and contents.
        </Tooltip>
    );
    const Social_media = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link your social media accounts.
        </Tooltip>
    );
    const Subscription = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Configure settings for subscriptions. Determine next action if an automatic payment failed.
        </Tooltip>
    );
    const Taxes = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set up tax rates to be used for incoming orders.
        </Tooltip>
    );
    const Web_service = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Link eCommerce sales channels, generate Anywhere Carts for products.
        </Tooltip>
    );
    const Workflow = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create custom workflow actions & dispositions to manage interactions with your customers.
        </Tooltip>
    );
    const Zebra_barcode = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Set up to print price labels for your products; upload and/or customize your existing price label templates.
        </Tooltip>
    );
    return (
        <div className="bg_col Admin_tab">
            <Row className="g-3">
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h3>System Settings</h3>
                    <p>In this section, you can view and configure all settings for HieCOR.<br/> Choose a setting from the left menu, or read about the settings below to get started.</p>
                </Col>

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Setting_tab} >
                        <Link to="/Tab_One">
                            <div className="box-hight">
                                <Icon icon="ant-design:setting-outlined" width="30" className="me-2" />System Settings
                            </div>
                        </Link>
                    </OverlayTrigger>
                </Col>

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Manage_users} >
                        <div className="box-hight">
                            <Icon icon="carbon:id-management" width="30" className="me-2" />Manage Users
                        </div>
                    </OverlayTrigger>
                </Col>

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Website} >
                        <div className="box-hight">
                            <Icon icon="fluent-mdl2:website" width="30" className="me-2" />Website
                        </div>
                    </OverlayTrigger>
                </Col>

                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Affiliate_Tracking} >
                        <div className="box-hight">
                            <Icon icon="arcticons:vtracking" width="30" className="me-2" />Affiliate Tracking
                        </div>
                    </OverlayTrigger>
                </Col>

            </Row>


            <Row className="mt-0 g-3">
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Alerts} >
                        <div className="box-hight">
                            <Icon icon="arcticons:alertswiss" width="30" className="me-2" />Alerts
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Amazon_settings} >
                        <div className="box-hight">
                            <Icon icon="uil:amazon" width="30" className="me-2" />Amazon Settings
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Coupons} >
                        <div className="box-hight">
                            <Icon icon="mdi:coupon-outline" width="30" className="me-2" />Coupons
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Custom_domains} >
                        <div className="box-hight">
                            <Icon icon="gridicons:domains" width="30" className="me-2" />Custom Domains
                        </div>
                    </OverlayTrigger>
                </Col>
            </Row>

            <Row className="mt-0 g-3">
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Custom_domains_details} >
                        <div className="box-hight">
                            <Icon icon="streamline:computer-database-server-3-server-network-internet" width="30" className="me-2" />Custom Domains Details
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={eBay_settings} >
                        <div className="box-hight">
                            <Icon icon="jam:ebay" width="50" className="me-2" />eBay Settings
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Email} >
                        <div className="box-hight">
                            <Icon icon="ic:baseline-alternate-email" width="30" className="me-2" />Email
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Anywhere_settings} >
                        <div className="box-hight">
                            <Icon icon="material-symbols:add-shopping-cart-rounded" width="30" className="me-2" />Anywhere Cart Settings
                        </div>
                    </OverlayTrigger>
                </Col>
            </Row>

            <Row className="mt-0 g-3">
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Fraud_detection} >
                        <div className="box-hight">
                            <Icon icon="material-symbols:tamper-detection-on-outline-rounded" width="30" className="me-2" />Fraud Detection
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Fulfillment} >
                        <div className="box-hight">
                            <Icon icon="tabler:truck-delivery" width="30" className="me-2" />Fulfillment
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Google_setting} >
                        <div className="box-hight">
                            <Icon icon="uil:calender" width="30" className="me-2" />Google calendar settings
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Invoice} >
                        <div className="box-hight">
                            <Icon icon="la:file-invoice-dollar" width="30" className="me-2" />Invoice
                        </div>
                    </OverlayTrigger>
                </Col>

            </Row>

            <Row className="mt-0 g-3">
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Locations} >
                        <div className="box-hight">
                            <Icon icon="pajamas:location" width="30" className="me-2" />Locations
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Workflow} >
                        <div className="box-hight">
                            <Icon icon="fa6-solid:network-wired" width="30" className="me-2" />Workflow
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Loyalty_program} >
                        <div className="box-hight">
                            <Icon icon="material-symbols:loyalty-outline" width="30" className="me-2" />Loyalty Program
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Merchant_accounts} >
                        <div className="box-hight">
                            <Icon icon="mdi:user-key-outline" width="30" className="me-2" />Merchant Accounts
                        </div>
                    </OverlayTrigger>
                </Col>

            </Row>

            <Row className="mt-0 g-3">
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Order_status} >
                        <div className="box-hight">
                            <Icon icon="dashicons:format-status" width="30" className="me-2" />Order Status
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={POS} >
                        <div className="box-hight">
                            <Icon icon="mdi:point-of-sale" width="30" className="me-2" />Point Of Sale (POS)
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={PAX} >
                        <div className="box-hight">
                            <Icon icon="cryptocurrency:pax" width="30" className="me-2" />PAX
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={QuickBooks} >
                        <div className="box-hight">
                            <Icon icon="simple-icons:quickbooks" width="30" className="me-2" />QuickBooks
                        </div>
                    </OverlayTrigger>
                </Col>
            </Row>

            <Row className="mt-0 g-3">
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Receipt_setup} >
                        <div className="box-hight">
                            <Icon icon="fluent:receipt-32-regular" width="30" className="me-2" />Receipt Setup
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Social_media} >
                        <div className="box-hight">
                            <Icon icon="healthicons:social-work-outline" width="30" className="me-2" />Social Media
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Subscription} >
                        <div className="box-hight">
                            <Icon icon="wpf:renew-subscription" width="30" className="me-2" />Subscription
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Taxes} >
                        <div className="box-hight">
                            <Icon icon="heroicons-outline:receipt-tax" width="30" className="me-2" />Taxes
                        </div>
                    </OverlayTrigger>
                </Col>
            </Row>

            <Row className="mt-0 g-3">
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Web_service} >
                        <div className="box-hight">
                            <Icon icon="carbon:api" width="30" className="me-2" />Web Service (API)
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
                    <OverlayTrigger delay={{ show: 250, hide: 250 }} overlay={Zebra_barcode} >
                        <div className="box-hight">
                            <Icon icon="ic:outline-barcode" width="30" className="me-2" />Zebra Barcode
                        </div>
                    </OverlayTrigger>
                </Col>
            </Row>
        </div>
    )
};

export default Admin_tab;
