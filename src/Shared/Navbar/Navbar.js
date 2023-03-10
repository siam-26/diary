import React, { useContext } from 'react';
import { FaBookReader } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { GoFileMedia } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import { CgProfile } from 'react-icons/cg';



const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    if (loading) {
        return <p>loading...</p>
    }
    //logOut
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=''>
            <div className="navbar ">
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
                                <li><Link to='/' className='font-bold'><GoFileMedia className='text-primary w-8 h-8' /> Home</Link></li>
                                <li><Link to='/media' className='font-bold'><GoFileMedia className='text-primary w-8 h-8' /> Media</Link></li>
                                <li><Link to='/myAlbum' className='font-bold'><BiPhotoAlbum className='text-primary w-8 h-8' /> My Album</Link></li>

                                <li><Link className='font-bold' to='/about'><FaBookReader className='text-primary w-8 h-8' />About</Link></li>
                            </ul>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl pl-6" to='/'>TalkDiary</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className=''> Home</Link></li>
                        <li><Link to='/media' className=''> Media</Link></li>
                        <li><Link className='' to='/about'>About</Link></li>
                    </ul>
                </div>

                {
                    user?.email ?
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} >
                                    {
                                        user?.photoURL ?
                                            <img className='w-12 h-12 rounded-full' src={user?.photoURL} title={user.displayName} alt='' />
                                            :
                                            <CgProfile className='w-10 h-14' title={user.displayName} />
                                    }
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52">

                                    <li><Link to='/' onClick={handleLogOut} >log out</Link></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className="navbar-end">
                            <Link className='btn btn-primary font-semibold text-white' to='/login'>login</Link>
                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;