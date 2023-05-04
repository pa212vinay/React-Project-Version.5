import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Tab from "./Tab";
import { Icon } from '@iconify/react';

const Supplier_Inner = () => {
    const [inputShiping, setInputShiping] = useState([{
        fullName: '',
    }]);
    const addInputFieldShiping = () => {
        setInputShiping([...inputShiping, {
            fullName: '',
        }])
    }
    const removeInputShiping = (index) => {
        const rows = [...inputShiping];
        rows.splice(index, 1);
        setInputShiping(rows);
    }
    const handleChangeShiping = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputShiping];
        list[index][name] = value;
        setInputShiping(list);
    }
    
    // --------------------------
    const [inputLogistics, setInputLogistics] = useState([{
        fullName: '',
    }]);

    const addInputLogistics = () => {
        setInputLogistics([...inputLogistics, {
            fullName: '',
        }])
    }

    const removeInputLogistics = (Logistics) => {
        const rows = [...inputLogistics];
        rows.splice(Logistics, 1);
        setInputLogistics(rows);
    }

    const handleChangeLogistics = (Logistics, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputLogistics];
        list[Logistics][name] = value;
        setInputLogistics(list);
    }

    // --------------------------Custom
    const [inputCustom, setInputCustom] = useState([{
        fullName: '',
    }]);

    const addInputCustom = () => {
        setInputCustom([...inputCustom, {
            fullName: '',
        }])
    }

    const removeInputCustom = (Custom) => {
        const rows = [...inputCustom];
        rows.splice(Custom, 1);
        setInputCustom(rows);
    }

    const handleChangeCustom = (Custom, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputCustom];
        list[Custom][name] = value;
        setInputCustom(list);
    }
    return (
        <>
           
                    <div className="p-3 bg_col pt-0 supplier">
                        <Tab />
                        <Row className='g-3 mt-1'>
                            <div className='col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Supplier Information</h6>
                                    <Row className='g-3'>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Supplier Name" className='fill-input' />
                                                <label className='float-label'>Supplier Name</label>
                                                <Icon icon="ph:currency-dollar" className='inputIcon'/>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Supplier Code" className='fill-input' />
                                                <label className='float-label'>Supplier Code</label>
                                            </div>
                                        </div>

                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-4 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="External Code" className='fill-input' />
                                                <label className='float-label'>External Code</label>
                                            </div>
                                        </div>

                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-4 col-sm-12 col-xs-12">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>ISBN</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">External Code Type</label>
                                               <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                            </div>
                                        </div>

                                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12">
                                            <button className="btn-hover color-2 float-end" onClick={addInputFieldShiping}>Add New</button>
                                        </div>
                                    </Row>
                                    {
                                        inputShiping.map((data, index) => {
                                            const { fullName } = data;
                                            return (
                                                <div className='row g-3 mt-0'>
                                                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12" key={index}>
                                                        <div className="form-group cus-form-group">
                                                            <input type="text" onChange={(evnt) => handleChangeShiping(index, evnt)} value={fullName} name="fullName" className="form-control fill-input" placeholder="Full Name" />
                                                            <label className='float-label'>External Code</label>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-10 col-xs-10" key={index}>
                                                        <div className="form-group cus-select-group w-100">
                                                            <Form.Control className="form-control fill-input" as="select" name="require_shipping" onChange={(evnt) => handleChangeShiping(index, evnt)} value={fullName}>
                                                                <option>ISBN</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </Form.Control>
                                                            <label className='float-label'>External Code Type</label>
                                                           <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                                        </div>
                                             
                                                        {(inputShiping.length !== 0) ? <button className="btn-icon color-1 ms-2" onClick={removeInputShiping}><Icon icon="iconamoon:close-duotone" width={26}/></button> : ''}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Logistics</h6>
                                    <Row className='g-3'>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Reorder point" className='fill-input' />
                                                <label className='float-label'>Reorder point</label>
                                                <Icon icon="ph:currency-dollar" className='inputIcon'/>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Restock level" className='fill-input' />
                                                <label className='float-label'>Restock level</label>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Limit Purchase Quantity" className='fill-input' />
                                                <label className='float-label'>Limit Purchase Quantity</label>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 position-relative">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Limit Purchase Quantity" className='fill-input' />
                                                <label className='float-label'>Bin Location</label>
                                            </div>
                                            <Form.Check label="show for all location" className='shiftRigh' />
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group cus-select-group">
                                                <Form.Control className="form-control fill-input" as="select" name="require_shipping">
                                                    <option>No Upsell</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Control>
                                                <label className='float-label' htmlFor="require_shipping">Automatic Upsell</label>
                                               <Icon icon="mdi:arrow-down-drop" className='inputIcon'/>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Item Notes Title" className='fill-input' />
                                                <label className='float-label'>Item Notes Title</label>
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group cus-form-group">
                                                <Form.Control placeholder="Gift Card Number" className='fill-input' />
                                                <label className='float-label'>Item Meta 1</label>
                                            </div>
                                        </div>

                                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                                            <button className="btn-hover color-2 float-end" onClick={addInputLogistics}>Add New</button>
                                        </div>
                                    </Row>
                                    <div className='row g-3 mt-0' >
                                        {
                                            inputLogistics.map((data, Logistics) => {
                                                const { fullName } = data;
                                                return (
                                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12" key={Logistics}>
                                                        <div className="form-group d-flex cus-form-group">
                                                            <input type="text" onChange={(evnt) => handleChangeLogistics(Logistics, evnt)} value={fullName} name="fullName" className="form-control fill-input" placeholder="Full Name" />
                                                            <label className='float-label'>Item Meta 1</label>
                                                            {(inputLogistics.length !== 0) ? <button className="btn-icon color-1 ms-2" onClick={removeInputLogistics}><Icon icon="iconamoon:close-duotone" width={26}/></button> : ''}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                <div className='bg_col p-3'>
                                    <h6 className='fw-bold mb-3'>Custom</h6>
                                    <Row className='g-3'>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group ">
                                                <Form.Control placeholder="Reorder point" className='fill-input' />
                                                
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group ">
                                                <Form.Control placeholder="Restock level" className='fill-input' />
                                                
                                            </div>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <Form.Control placeholder="Limit Purchase Quantity" className='fill-input' />
                                                
                                            </div>
                                        </div>
                                        
                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-sm-12 col-xs-12">
                                            <button className="btn-hover color-2 float-end" onClick={addInputCustom}>Add New</button>
                                        </div>
                                    </Row>
                                    <div className='row g-3 mt-0' >
                                        {
                                            inputCustom.map((data, Custom) => {
                                                const { fullName } = data;
                                                return (
                                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" key={Custom}>
                                                        <div className="form-group d-flex cus-form-group">
                                                            <input type="text" onChange={(evnt) => handleChangeCustom(Custom, evnt)} value={fullName} name="fullName" className="form-control fill-input" placeholder="Full Name" />
                                                            <label className='float-label'>Item Meta 1</label>
                                                            {(inputCustom.length !== 0) ? <button className="btn-icon color-1 ms-2 text-center" onClick={removeInputCustom}><Icon icon="iconamoon:close-duotone" width={26}/></button> : ''}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
        </>
    );
}
export default Supplier_Inner;