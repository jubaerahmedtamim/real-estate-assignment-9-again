import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className=' max-w-sm  md:max-w-3xl lg:max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='p-4 lg:p-0'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;