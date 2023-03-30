import React from 'react';
import { ImSwitch } from "react-icons/im";
import '../../../css/utility/_utility-dir.scss'

const Timeline = () => {

  return (
    <>
      <div className="p-3 bg_col mt-3">
        <div class="timeline block mb-4">
          <h6 className='txt_color fw-bold'>ORDER TIMELINE</h6>
          <div class="tl-item active">
            <div class="tl-dot b- ">
              <div className="tl_text ">Today</div>
            </div>
          </div>
          <div class="tl-item active">
            <div class="tl-dot b-danger"><ImSwitch className="iconT_line" /></div>
            <div class="tl-content">
              <div class=" fw-bold">Order 22870 Refunded</div>
              <div class="tl-date text-muted mt-1 ">08/04/2022</div>
            </div>
          </div>
          <div class="tl-item active">
            <div class="tl-dot b-primary"><ImSwitch className="iconT_line" /></div>
            <div class="tl-content">
              <div class=" fw-bold">Invoice 123456 Created</div>
              <div class="tl-date text-muted mt-1 ">08/04/2022</div>
            </div>
          </div>
          <div class="tl-item active">
            <div class="tl-dot b-success"><ImSwitch className="iconT_line" /></div>
            <div class="tl-content">
              <div class=" fw-bold">Invoice 22870 Paid</div>
              <div class="tl-date text-muted mt-1 ">08/04/2022</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Timeline;

