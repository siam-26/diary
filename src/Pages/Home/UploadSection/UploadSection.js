import React, { useContext, useState } from 'react';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { BiPhotoAlbum } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';
import { useForm } from 'react-hook-form';
import Loading from '../../Loading/Loading';
import { CgProfile } from 'react-icons/cg';

const UploadSection = () => {
    const { user, loading } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();


    const imgHost = process.env.REACT_APP_imgbb_key;

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmitForm = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHost}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const upload = {
                        photo: imgData.data.url,
                        post: data.text,
                        image: user?.photoURL,
                        name: user?.displayName,
                    }
                    console.log(upload);
                    fetch('https://y-mu-umber.vercel.app/upload', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(upload)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                alert('successfully added');

                            }
                        })
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className='bg-white mt-8 md:ml-24 lg:ml-12 mr-12  lg:mr-0 shadow-xl rounded w-full lg:w-[800px]'>

            <div className='flex gap-2 pl-4 pr-4'>
                <div className="avatar pt-6 pl-6">
                    <div className="w-16 rounded-full">
                        {
                            user?.photoURL ?

                                <img {...register("image")} src={user?.photoURL} alt='' />
                                :
                                <CgProfile className='w-14 h-14 text-accent' />
                        }

                    </div>
                    <p className='font-semibold'>{user?.displayName}</p>
                </div>

                <div className='w-full pt-8 pr-6'>
                    <input {...register("text")} type="text" placeholder="Write a post . . ." className="input input-bordered w-full" />
                </div>
            </div>

            <div className='grid grid-cols-3 pt-4 pl-4 pr-4 pb-6'>
                <div className='flex ml-6 mt-1'>
                    <HiOutlinePhoto className='mt-1 h-4 text-primary' />

                    <input {...register("image")} type="file" />
                </div>

                <div className='flex ml-12 mt-1'>
                    <BiPhotoAlbum className='mt-1 h-4 text-primary' />
                    <Link to='/myAlbum' className='ml-1 cursor-pointer text-accent'>My Album</Link>

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