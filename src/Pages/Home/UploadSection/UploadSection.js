import React, { useContext } from 'react';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { BiPhotoAlbum } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';

const UploadSection = () => {
    const { user } = useContext(AuthContext);
    return (
        <form className='bg-white mt-8 md:ml-24 lg:ml-12 mr-12  lg:mr-0 shadow-xl rounded w-full lg:w-[800px]'>
            {/* <div className='pt-12'>
                <input type="datetime-local" />
            </div> */}
            <div className='flex gap-2 pl-4 pr-4'>
                <div className="avatar pt-6 pl-6">
                    <div className="w-16 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <div className='w-full pt-8 pr-6'>
                    <input type="text" placeholder="Write a post" className="input input-bordered w-full" />
                </div>
            </div>

            <div className='grid grid-cols-3 pt-4 pl-4 pr-4 pb-6'>
                <div className='flex ml-6 mt-1'>
                    <HiOutlinePhoto className='mt-1 h-4 text-primary' />
                    <input type="file" name="uploadfile" id="img" style={{ display: 'none' }} />
                    <label for="img" className='ml-1 cursor-pointer text-accent'>Upload Photo</label>

                </div>

                <div className='flex ml-12 mt-1'>
                    <BiPhotoAlbum className='mt-1 h-4 text-primary' />
                    <Link to='' className='ml-1 cursor-pointer text-accent'>My Album</Link>

                </div>

                {
                    user?.email ?
                        <div className='mt-1'>
                            <button className="btn btn-xs btn-primary text-white ml-16" >Submit</button>
                        </div>
                        :
                        <div className='mt-1'>
                            <button className="btn btn-xs btn-primary text-white ml-16" disabled>Submit</button>
                        </div>
                }
            </div>
        </form>
    );
};

export default UploadSection;