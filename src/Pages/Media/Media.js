import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Loading/Loading';
import MediaImage from './MediaImage';

const Media = () => {
    const { data: uploadedPosts, isLoading, refetch } = useQuery({
        queryKey: ['upload'],
        queryFn: async () => {
            const res = await fetch('https://y-mu-umber.vercel.app/upload');
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-5 '>
            <p className=' font-semibold ml-5 lg:ml-12 mt-3'>All Uploaded Posts</p>
            <div className=''>

                {
                    uploadedPosts &&
                    uploadedPosts.map(uploadedPost => <MediaImage key={uploadedPost._id}
                        uploadedPost={uploadedPost}
                    ></MediaImage>)
                }

            </div>
        </div>

    );
};

export default Media;