import * as React from 'react';
import Row from 'react-bootstrap/Row';
// import BarChart from './Barchart.js';
import { useState } from 'react';
import { UserData } from './Data';

const Dashboard_Inner = () => {
  const [userData, setUserData] = useState({
    lables: UserData.map((data) => data.year),
    datasets: [{
      lable: "Users Gained",
      data: UserData.map((data) => data.userGain),

    }]
  })
  return (
    <>
      <Row className="g-3">
        <div className=" col-lg-4 col-md-4">
          <div className=''>
            {/* <BarChart chartData={userData} /> */}
          </div>
        </div>
      </Row>
    </>
  );
}
export default Dashboard_Inner;