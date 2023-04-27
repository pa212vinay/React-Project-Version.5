import Row from 'react-bootstrap/Row';
import BarChart from './BarChart.js';
import BarChartY from './BarChartY.js';
import PieChart from './PieChart.js';
import LineChart from './LineChart.js';
import LineChartM from './LineChartM.js';


const Revenue_Products_Inner = () => {
 
  return (
    <>
      <Row className="g-3 hightCanvas mt-1">
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className='bg_col p-3'>
            <BarChart/>
          </div>
        </div>
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className='bg_col p-3'>
            <BarChart/>
          </div>
        </div>
        <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className='bg_col p-3'>
            <PieChart/>
          </div>
        </div>
        {/* <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className='bg_col p-3'>
            <LineChart/>
          </div>
        </div>
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className='bg_col p-3'>
            <LineChartM/>
          </div>
        </div> */}
        <div className=" col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
          <div className='bg_col p-3'>
            <BarChartY/>
          </div>
        </div>
        <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className='bg_col p-3'>
            <LineChartM/>
          </div>
        </div> 
      </Row>
    </>
  );
}
export default Revenue_Products_Inner;