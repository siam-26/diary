import React from 'react';
import { FaBookReader } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { GoFileMedia } from 'react-icons/go';



const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <ul className="menu  w-80 bg-base-100 text-base-content">
                                {/* <!-- Sidebar content here --> */}
                                <li><a className='font-bold'>
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" alt='' />
                                        </div>
                                    </div>
                                    Name</a></li>
                                <li><a className='font-bold'><GoFileMedia className='text-primary w-8 h-8' /> Media</a></li>
                                <li><a className='font-bold'><BiPhotoAlbum className='text-primary w-8 h-8' /> My Album</a></li>
                                <li><a className='font-bold'><FaBookReader className='text-primary w-8 h-8' /> About</a></li>
                            </ul>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl pl-6">TalkDiary</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Media</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;