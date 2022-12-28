import React from 'react';
import { SlLike } from 'react-icons/sl';
import { FcLike } from 'react-icons/fc';


const PopularPost = () => {
    return (
        <div>
            <div className="card w-full lg:w-[800px] lg:ml-12
            mt-12 mb-12 bg-base-100 shadow-xl">

                <div className='flex pt-5 pl-5'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold ml-2'>Name</p>
                        <p className='text-neutral ml-2'>Date</p>
                    </div>

                </div>

                <figure className="pt-4 pb-8">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded w-full" />
                </figure>

                <div className='flex pb-6'>
                    <div className='ml-8'>
                        <div className='flex'>
                            <SlLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>

                    <div className='ml-16'>
                        <div className='flex'>
                            <FcLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>


                </div>

            </div>

            <div className="card w-full lg:w-[800px] lg:ml-12
            mt-12 mb-12 bg-base-100 shadow-xl">

                <div className='flex pt-5 pl-5'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold ml-2'>Name</p>
                        <p className='text-neutral ml-2'>Date</p>
                    </div>

                </div>

                <figure className="pt-4 pb-8">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded w-full" />
                </figure>

                <div className='flex pb-6'>
                    <div className='ml-8'>
                        <div className='flex'>
                            <SlLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>

                    <div className='ml-16'>
                        <div className='flex'>
                            <FcLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>


                </div>

            </div>

            <div className="card w-full lg:w-[800px] lg:ml-12
            mt-12 mb-12 bg-base-100 shadow-xl">

                <div className='flex pt-5 pl-5'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://placeimg.com/192/192/people" alt='' />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold ml-2'>Name</p>
                        <p className='text-neutral ml-2'>Date</p>
                    </div>

                </div>

                <figure className="pt-4 pb-8">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded w-full" />
                </figure>

                <div className='flex pb-6'>
                    <div className='ml-8'>
                        <div className='flex'>
                            <SlLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>

                    <div className='ml-16'>
                        <div className='flex'>
                            <FcLike className='text-xl' />
                            <p className='text-neutral text-sm'>Number</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default PopularPost;