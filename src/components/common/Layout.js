import React from 'react'
import { Outlet } from 'react-router'
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

export default function Layout() {
    return (
        <>
            <div className='app_page'>
                <Sidebar />
                <div className='layout_content' id='layoutContentId'>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    )
}
