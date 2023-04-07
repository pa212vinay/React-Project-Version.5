import { NavLink } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

const Report_Sidebar = () => {

    
    return (
        <div>
            <ul class="sidebar-nav">
                <li class="sidebar-brand">Report</li>
                <li> <NavLink>Sales Summary</NavLink> </li>
                <li> <NavLink>Transactions By Agent</NavLink> </li>
                <li> <NavLink>Product Profitability</NavLink> </li>
                <li> <NavLink>Inventory Summary</NavLink> </li>
                <li> <NavLink>Inventory by Category</NavLink> </li>
                <li> <NavLink>Inventory Totals</NavLink> </li>
                <li> <NavLink>Customer Data Collection</NavLink> </li>
                <li> <NavLink>zReport</NavLink> </li>
                <li> <NavLink>zSample1</NavLink> </li>
            </ul>
        </div>
    );
}
export default Report_Sidebar;