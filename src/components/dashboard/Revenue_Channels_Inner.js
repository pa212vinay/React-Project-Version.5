import Row from 'react-bootstrap/Row';
import BarChartY from './BarChartY.js';
import PieChart from './PieChart.js';
import LineChart from './LineChart.js';
import LineChartM from './LineChartM.js';


const Revenue_Channels_Inner = () => {

  return (
    <>
      <Row className="g-3 hightCanvas mt-1">
        <div className=" col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 chart h-100'>
            <h3>REVENUE BY SALES CHANNELS</h3>
            <p>DAILY SALES PERFORMANCE</p>
            <hr className="bottomBorder" />
            <div className='lh-lg'>
              <label>INVOICE</label>
              <label className='float-end'>$4,549</label>
            </div>
            <div className='lh-lg'>
              <label>POS</label>
              <label className='float-end'>$8,586</label>
            </div>
            <div className='lh-lg'>
              <label>Website</label>
              <label className='float-end'>$1,067</label>
            </div>
            <hr />
            <div className='lh-lg'>
              <label>Website</label>
              <label className='float-end'>$1,067</label>
            </div>
          </div>
        </div>

        <div className=" col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <LineChartM />
          </div>
        </div>

        <div className=" col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <PieChart />
          </div>
        </div>

        <div className=" col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <BarChartY />
          </div>
        </div>

        <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <div className='px-5'>
            <LineChart />
            </div>
          </div>
        </div>

      </Row>
    </>
  );
}
export default Revenue_Channels_Inner;