import Row from 'react-bootstrap/Row';
import { Form, Table } from 'react-bootstrap';
// import '../Stylesheet/Tracking_info.scss';


const Products_purchased_inner = () => {
    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="p-3 bg_col">
                        <Row>
                            <h6 className='fw-bold mt-3'>Ticket History</h6>
                            <div>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th> <Form.Check inline name="group1" /></th>
                                            <th>Product</th>
                                            <th>Category</th>
                                            <th>Product Code</th>
                                            <th>Total Orders</th>
                                            <th>Quality</th>
                                            <th>Total Sales</th>
                                            <th>In Stock</th>

                                            <th>Last Purchase Price</th>
                                            <th>Last Order Date</th>
                                            <th>First Order Date</th>
                                            <th>Rewards Redeemed</th>
                                            <th>Rewards Earned</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>Broil King® Stainless Steel 24&quot; Rear Compact Fridge Rear Panel</td>
                                            <td>USB Cables</td>
                                            <td>800040</td>
                                            <td>2</td>
                                            <td>6</td>
                                            <td>1194</td>
                                            <td>unlimited</td>
                                            <td>199</td>
                                            <td>12/7/2022</td>
                                            <td>12/5/2022</td>
                                            <td>0</td>
                                            <td>0.00</td>

                                        </tr>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>Serial number test</td>
                                            <td>abc</td>
                                            <td>S_N_T</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1000</td>
                                            <td>966</td>
                                            <td>1000</td>
                                            <td>12/7/2022</td>
                                            <td>12/5/2022</td>
                                            <td>0</td>
                                            <td>0.00</td>
                                        </tr>
                                        <tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>2</td>
                                            <td>22</td>
                                            <td>menual testing</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
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
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                        </tr><tr>
                                            <td><Form.Check inline name="group1" /></td>
                                            <td>2</td>
                                            <td>22</td>
                                            <td>menual testing</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
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
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                            <td>$399.00</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </Row>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Products_purchased_inner;