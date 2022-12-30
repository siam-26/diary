import React, { useContext, useState } from 'react';
import { SlLike } from 'react-icons/sl';
import { FcLike } from 'react-icons/fc';
import { AiFillLike } from 'react-icons/ai';

import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';



const Details = () => {
    const details = useLoaderData();
    const { user } = useContext(AuthContext);
    const [like, setLike] = useState(true);


    const { data, isLoading, refetch } = useQuery({
        queryKey: ['like'],
        queryFn: async () => {
            const res = await fetch('https://y-mu-umber.vercel.app/like');
            const data = res.json();
            return data;
        }
    })
    const handleLiked = () => {
        const one = 1;
        const increaseLike = {
            one,
        }
        fetch('https://y-mu-umber.vercel.app/like', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(increaseLike)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setLike(false);
                    refetch();
                }

            })
    }

    const handleDeleted = () => {
        fetch('https://y-mu-umber.vercel.app/like', {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(deleteData => {
                console.log(deleteData);
                if (deleteData.acknowledged) {
                    setLike(true);
                    refetch();
                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-full md:lg:w-[800px] lg:w-[800px] md:ml-0 lg:ml-12 mt-12 mb-12 bg-base-100 shadow-xl">

                <div className='flex pt-5 pl-3'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold ml-2 mt-3'>{user?.displayName}</p>

                    </div>

                </div>
                <p className='ml-4 mt-4 font-semibold'>{details?.post}</p>

                <figure className="pt-4 pb-8 ">
                    <img src={details?.photo} alt="" className="rounded w-full h-[470px]" />

                </figure>

                <div className='flex ml-5 lg:justify-start gap-5 pb-6'>
                    <div className=''>
                        <div className='flex items-center'>
                            {
                                like ?
                                    <SlLike onClick={handleLiked} className='text-xl text-primary' />
                                    :
                                    <AiFillLike onClick={handleDeleted} className='text-xl text-primary' />
                            }
                            <p className='text-neutral ml-1 font-bold text-xl'>{data.length}</p>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Details;