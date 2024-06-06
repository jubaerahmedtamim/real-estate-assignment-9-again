import React from 'react';
import Slider from '../../components/Slider/Slider';
import Estate from '../../components/Estate/Estate';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Slider></Slider>
            <Estate data={data}></Estate>
        </div>
    );
};

export default Home;