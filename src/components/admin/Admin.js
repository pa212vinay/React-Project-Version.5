import React from "react"
import Admin_tab from "./Admin_tab";
import { Container } from "react-bootstrap";

const Admin = () => {
    return (
        <Container fluid className='p-3'>
            <Admin_tab />
        </Container>
    )
};
export default Admin;
