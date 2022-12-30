import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import Loading from '../Loading/Loading';
import AboutAfterFetch from './AboutAfterFetch';

const About = () => {
    const { user } = useContext(AuthContext);

    const url = `https://y-mu-umber.vercel.app/newUser?email=${user?.email}`;

    const { data: newUser = [], isLoading, refetch } = useQuery({
        queryKey: ['newUser', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(newUser);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {
                newUser.map(userInfo => <AboutAfterFetch key={userInfo._id}
                    userInfo={userInfo}
                ></AboutAfterFetch>)
            }

        </div>
    );
};

export default About;