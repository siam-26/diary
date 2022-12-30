import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';

const AboutAfterFetch = ({ userInfo }) => {
    const { name, email, university, address } = userInfo;
    const { user } = useContext(AuthContext);
    console.log(userInfo);
    return (
        <div>
            <div className='flex mt-4 ml-5 md:ml-2 lg:ml-2'>
                {
                    user?.photoURL ?
                        <div className="avatar online">
                            <div className="w-24 rounded-full">
                                <img src={user.photoURL} alt='' />
                            </div>
                        </div>
                        :

                        <div className="avatar online">
                            <BiUserCircle className='w-24 h-24' />
                        </div>
                }

                <h1 className='font-bold text-3xl mt-6 ml-2'>{user?.displayName}</h1>

            </div>
            <button className='mt-4 ml-5 md:ml-2 lg:ml-2 btn btn-primary text-white font-semibold'><AiOutlineEdit /> Edit Profile</button>
            <h2 className='text-2xl font-semibold mt-6 ml-5 md:ml-2 lg:ml-2'>About</h2>
            <div className='ml-5 md:ml-2 lg:ml-2 mt-4 '>
                <p className='text-black font-semibold py-3'>Name: <span className='text-black font-bold'><i>{name}</i></span></p>
                <p className='text-black font-semibold py-3'>Email: <span className='text-black font-bold'><i>{email}</i></span></p>
                <p className='text-black font-semibold py-3'>University: <span className='text-black font-bold'><i>{university}</i></span></p>
                <p className='text-black font-semibold py-3'>Address: <span className='text-black font-semibold'><i>{address}</i></span></p>
            </div>
        </div>
    );
};

export default AboutAfterFetch;