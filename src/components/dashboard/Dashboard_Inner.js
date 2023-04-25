import Row from 'react-bootstrap/Row';
import BarChart from './BarChart.js';
import BarChartY from './BarChartY.js';
import PieChart from './PieChart.js';
import LineChart from './LineChart.js';
import LineChartM from './LineChartM.js';

const Dashboard_Inner = () => {
 
  return (
    <>
      <Row className="g-3">
        <div className=" col-lg-6 col-md-6">
          <div className='bg_col p-3 hightCanvas'>
            <BarChart/>
          </div>
        </div>
        <div className=" col-lg-6 col-md-6">
          <div className='bg_col p-3 hightCanvas'>
            <PieChart/>
          </div>
        </div>
        <div className=" col-lg-6 col-md-6">
          <div className='bg_col p-3 hightCanvas'>
            <LineChart/>
          </div>
        </div>
        <div className=" col-lg-6 col-md-6">
          <div className='bg_col p-3 hightCanvas'>
            <BarChartY/>
          </div>
        </div>
        <div className=" col-lg-6 col-md-6">
          <div className='bg_col p-3 hightCanvas'>
            <LineChartM/>
          </div>
        </div>
      </Row>
    </>
  );
}
export default Dashboard_Inner;