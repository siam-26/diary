import React from 'react';
import { SlLike } from 'react-icons/sl';
import { FcLike } from 'react-icons/fc';

const MyAlbum = () => {
    return (
        <div>
            <p className=' font-semibold mt-10'>My Posts</p>
            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-3 lg:gap-4 mt-6 pr-2'>
                <div>
                    <img className='w-[130px] md:w-[200px] lg:w-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px]' src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    <div className='flex mt-1'>
                        <div className='flex ml-1 md:ml-3 lg:ml-5'>
                            <SlLike className='lg:text-xl' />
                            <p className='text-neutral text-sm'>12</p>
                        </div>

                        <div className='ml-10 md:ml-16 lg:ml-16'>
                            <div className='flex'>
                                <FcLike className='lg:text-xl' />
                                <p className='text-neutral text-sm'>12</p>
                            </div>
                        </div>
                    </div>
                </div>


                <img className='w-[130px] md:w-[200px] lg:w-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px]' src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />

                <img className='w-[130px] md:w-[200px] lg:w-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px]' src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />

                <img className='w-[130px] md:w-[200px] lg:w-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px]' src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />

                <img className='w-[130px] md:w-[200px] lg:w-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px]' src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />

                <img className='w-[130px] md:w-[200px] lg:w-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px]' src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />

            </div>
        </div>
    );
};

export default MyAlbum;