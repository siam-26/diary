import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import RightNavbar from '../Shared/RightNavbar/RightNavbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <RightNavbar></RightNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;