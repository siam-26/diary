import React from 'react';

const MediaImage = () => {
    return (
        <div>
            <p className=' font-semibold mt-10'>All Uploaded Posts</p>
            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 md:gap-3 lg:gap-4 mt-6 pr-2'>
                <div>
                    <img className='w-[130px] md:w-[200px] lg:w-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px]' src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    <button className='btn btn-sm btn-primary relative bottom-12 left-5 md:left-9 lg:left-14 text-white font-semibold'>Details</button>
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

export default MediaImage;