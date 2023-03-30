import Row from 'react-bootstrap/Row';
import { Table } from 'react-bootstrap';

const Note = () => {
  return (
    <>
      <div className='bg_row mt-3 p-4'>
            <h6 className='fw-bold mt-2'>Note</h6>
            <Row>
              <div>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Date/Time</th>
                      <th>Logged By</th>
                      <th>Note</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>

                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>

                    </tr>
                    <tr>
                      <td>3</td>
                      <td >Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </div>
    </>
  );
}
export default Note;