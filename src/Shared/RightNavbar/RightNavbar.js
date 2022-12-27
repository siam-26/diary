import React from 'react';
import { FaBookReader } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';

const RightNavbar = () => {
    return (
        <div className='hidden lg:block'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}

                </div>
                <div className="drawer-side">
                    {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a className='font-bold'>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            Name</a></li>
                        <li><a className='font-bold'><BiPhotoAlbum className='text-primary w-8 h-8' /> My Album</a></li>
                        <li><a className='font-bold'><FaBookReader className='text-primary w-8 h-8' /> About</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default RightNavbar;