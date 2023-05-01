import Row from 'react-bootstrap/Row';
import BarChart from './BarChart.js';
import BarChartY from './BarChartY.js';
import PieChart from './PieChart.js';
import LineChart from './LineChart.js';
import LineChartM from './LineChartM.js';

const Sales = () => {
 
  return (
    <>
      <Row className="g-3 hightCanvas mt-1">
        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <BarChart/>
          </div>
        </div>
        <div className=" col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <PieChart/>
          </div>
        </div>
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <LineChart/>
          </div>
        </div>
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <LineChartM/>
          </div>
        </div>
        <div className=" col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className='bg_col p-3 h-100'>
            <BarChartY/>
          </div>
        </div>
      </Row>
    </>
  );
}
export default Sales;