import React, { useContext } from 'react';
import { SlLike } from 'react-icons/sl';
import { FcLike } from 'react-icons/fc';


import { AuthContext } from '../../Context/Authprovider';
import { Link } from 'react-router-dom';

const MediaImage = ({ uploadedPost }) => {

    const { user } = useContext(AuthContext);
    const { photo, name, post, image, _id } = uploadedPost;
    return (

        <div>

            <div className="card w-full md:lg:w-[800px] lg:w-[800px] md:ml-0 lg:ml-12 mt-12 mb-12 bg-base-100 shadow-xl">

                <div className='flex pt-5 pl-3'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold ml-2 mt-3'>{name}</p>

                    </div>

                </div>
                <p className='ml-4 mt-4 font-semibold'>{post}</p>

                <figure className="pt-4 pb-8 ">
                    <img src={photo} alt="" className="rounded w-full h-[470px]" />

                </figure>

                <div className='flex ml-5 lg:justify-start gap-5 pb-6'>
                    <div className=''>
                        <div className='flex'>
                            <SlLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex'>
                            <FcLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>

                    <Link to={`/details/${_id}`}><button className='ml-16 md:ml-[500px] lg:ml-[500px]  btn btn-primary btn-sm text-white'><small>Details</small></button></Link>
                </div>

            </div>

        </div>
    );
};

export default MediaImage;