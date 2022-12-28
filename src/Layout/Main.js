import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import RightNavbar from '../Shared/RightNavbar/RightNavbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex bg-secondary'>
                <RightNavbar></RightNavbar>
                <Outlet></Outlet>

            </div>


        </div>
    );
};

export default Main;