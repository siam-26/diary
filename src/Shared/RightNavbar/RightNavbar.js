import React, { useContext } from 'react';
import { FaBookReader } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const RightNavbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='hidden lg:block'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex ">
                    {/* <!-- Page content here --> */}

                </div>
                <div className="drawer-side">

                    <ul className="menu p-4 w-80 bg-secondary text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/about' className='font-bold'>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                            Name</Link></li>
                        <li><Link to='/myAlbum' className='font-bold'><BiPhotoAlbum className='text-primary w-8 h-8' /> My Album</Link></li>
                        <li><Link to='/about' className='font-bold'><FaBookReader className='text-primary w-8 h-8' /> About</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default RightNavbar;