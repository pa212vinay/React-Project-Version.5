import Row from 'react-bootstrap/Row';
import BarChart from './BarChart.js';
import BarChartY from './BarChartY.js';
import PieChart from './PieChart.js';
import LineChart from './LineChart.js';
import LineChartM from './LineChartM.js';

const Customers = () => {
 
  return (
    <>
      <Row className="g-3 hightCanvas mt-1">
        <div className=" col-lg-7 col-md-12">
          <div className='bg_col p-3'>
            <BarChart/>
          </div>
        </div>
        <div className=" col-lg-5 col-md-12">
          <div className='bg_col p-3'>
            <PieChart/>
          </div>
        </div>
        <div className=" col-lg-6 col-md-12">
          <div className='bg_col p-3'>
            <LineChart/>
          </div>
        </div>
        <div className=" col-lg-6 col-md-6">
          <div className='bg_col p-3'>
            <LineChartM/>
          </div>
        </div>
        <div className=" col-lg-12 col-md-12">
          <div className='bg_col p-3'>
            <BarChartY/>
          </div>
        </div>
      </Row>
    </>
  );
}
export default Customers;