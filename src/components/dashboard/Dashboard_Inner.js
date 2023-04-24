import Row from 'react-bootstrap/Row';
import BarChart from './BarChart.js';

const Dashboard_Inner = () => {
 
  return (
    <>
      <Row className="g-3">
        <div className=" col-lg-4 col-md-4">
          <div className=''>
            <BarChart/>
          </div>
        </div>
      </Row>
    </>
  );
}
export default Dashboard_Inner;