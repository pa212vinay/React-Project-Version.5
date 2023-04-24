import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Form, Row } from 'react-bootstrap';

export default function FulfillmentOrderSummary() {
    // const [width, setWidth] = useState();
    // const [height, setHeight] = useState();

    // const observedDiv = useRef(null);
    // const resizeObserver = new ResizeObserver(handleElementResized);

    // useEffect(() => {
    //     resizeObserver.observe(observedDiv.current);


    //     return function cleanup() {
    //         resizeObserver.disconnect();
    //     }
    // });


    // const handleElementResized = () => {
    //     if (observedDiv.current.offsetWidth !== width) {
    //         setWidth(observedDiv.current.offsetWidth);
    //     }
    //     if (observedDiv.current.offsetHeight !== height) {
    //         setHeight(observedDiv.current.offsetHeight);
    //     }
    // }

    const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight);
  }, []);

    return (
        <>
            <tr>
                <td colSpan={18} className="py-3" >
                    <div className='row' ref={ref}>
                        <div className='col-md-4'>
                            <div className=" bg_col p-3">
                                <h6 className='fw-bold mb-3' > Order Summary {width - 230}</h6>
                                <Row>
                                    <div className='col-md-8'>
                                        {/* <div className="main-div" ref={observedDiv}>
                                            <p>Block width: {width}, height: {height} </p>
                                        </div> */}
                                        <p>
                                            <span className='fw-bold'>Source:</span>
                                            <span className='float-end'>API</span>
                                        </p>
                                        <p>
                                            <span className='fw-bold'>Order Date:</span>
                                            <span className='float-end'>09/28/2022</span>
                                        </p>
                                        <p>
                                            <span className='fw-bold'>Paid Date:</span>
                                            <span className='float-end'>09/28/2022</span>
                                        </p>
                                    </div>
                                    <div className='col-md-4'>
                                        <p>Print Packing Slip</p>
                                        <p>Print Full Receipt</p>
                                        <p>Add Note</p>
                                    </div>
                                    <div className="p-3">
                                        <div className="form-group cus-form-group">
                                            <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                            <label htmlFor="shipping" className='float-label'>Search Product</label>

                                        </div>

                                    </div>
                                </Row>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className=" bg_col p-3">
                                <div className="form-group cus-form-group">
                                    <Form.Control placeholder="Wholesale Price" className='fill-input' />
                                    <label htmlFor="shipping" className='float-label'>Search Product</label>

                                </div>

                            </div>
                        </div>
                    </div>

                </td>
            </tr>
        </>
    )
}
