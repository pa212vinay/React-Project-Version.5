import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';



const Tracking_Inner = () => {
  return (
    <>
      <div className="p-3 bg_row mt-3">
        <h6 className='fw-bold'>TRACKING</h6>
        <Row className="g-3 mt-2">
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side red_light">
                <div className='fw-bold font-14'>ID</div>
                <span className="gray font-14">114082</span>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side green_light">
                <div className='fw-bold font-14'>Impression On</div>
                <span className="gray font-14">2022-08-16 00:08:51</span>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side">
                <div className='fw-bold font-14'>Conversion On</div>
                <span className="gray font-14">2022-08-16 00:09:31</span>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side pink_light">
                <div className='fw-bold font-14'>Conversion Id</div>
                <span className="gray font-14">114082</span>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side grey_light">
                <div className='fw-bold font-14'>Userid</div>
                <span className="gray font-14">114082</span>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side gama_green_light">
                <div className='fw-bold font-14'>Fraud Flag</div>
                <span className="gray font-14">No</span>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side purpal_light">
              <div className='fw-bold font-14'>Qualifier Flag</div>
                <span className="gray font-14">Yes</span>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-lg-3">
            <Card className='mb-2 border-0 user_detail border_05'>
              <div className="bg_card_side red_light_20">
                <div className='fw-bold font-14'>Destination Type</div>
                <span className="gray font-14">landing_page</span>
              </div>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
}
export default Tracking_Inner;