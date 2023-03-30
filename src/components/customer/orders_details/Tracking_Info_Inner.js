
import Tracking_Inner from '../tracking_Info/Tracking_Inner';
import Shipping_info from '../tracking_Info/Shipping_info';
import Order_Items from '../tracking_Info/Order_Items'
import Tracking_Note from '../tracking_Info/Tracking_Note'


const Tracking_info_inner = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          <Tracking_Inner />
          <Shipping_info />
          <Order_Items />
          <Tracking_Note />
        </div>
      </div>
    </>
  );
}
export default Tracking_info_inner;