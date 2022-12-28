import React from 'react';
import PopularPostSection from '../PopularPostSection/PopularPostSection';
import UploadSection from '../UploadSection/UploadSection';

const Home = () => {
    return (
        <div className=''>
            <UploadSection></UploadSection>
            <PopularPostSection></PopularPostSection>
        </div>
    );
};

export default Home;