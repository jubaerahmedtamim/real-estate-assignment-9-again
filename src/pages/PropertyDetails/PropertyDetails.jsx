
import React from 'react';
import { BiArea } from 'react-icons/bi';
import { FaParking } from 'react-icons/fa';
import { FaBackward } from 'react-icons/fa6';
import { TbCategory, TbCoinTaka, TbCurrentLocation } from 'react-icons/tb';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = useLoaderData();

    const detailData = data.find(singleData => singleData.id === idInt);

    const { estate_title, segment_name, description, area, location, price, facilities, image_url } = detailData;

    return (
        <div>
            <div className='space-y-6 p-6 mb-8'>
                <img className='w-full lg:w-3/4 mx-auto rounded-lg' data-aos="fade-down"
                    data-aos-duration="1000" src={image_url} alt="image" />
                <div className='text-center'
                    data-aos="fade-down"
                    data-aos-duration="1000">
                    <h3 className='text-3xl '>{estate_title}</h3>
                    <p>{description}</p>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row justify-around'>
                    <p className='flex items-center gap-2' data-aos="fade-right" data-aos-duration="1000"><TbCoinTaka /> <span>{price}</span> </p>
                    <p className='flex items-center gap-2' data-aos="fade-left" data-aos-duration="1000"><TbCategory /> <span>{segment_name}</span> </p>
                </div>
                <div className='flex flex-col gap-4 lg:flex-row justify-around'>
                    <p className='flex items-center gap-2' data-aos="fade-right" data-aos-duration="1000"><TbCurrentLocation /> <span>{location}</span></p>
                    <p className='flex items-center gap-2' data-aos="fade-left" data-aos-duration="1000"><BiArea /> <span>{area}</span></p>
                </div>
                <div className='text-center'>
                    <h1 className='text-2xl mb-4'>Facilities</h1>
                    <ul className='flex flex-col lg:flex-row lg:justify-around  '>
                        {
                            facilities.map((facility,index) => <li key={index} className='border-4 border-double px-4 py-2 rounded-lg text-sm font-semibold' >{facility}</li>)
                        }
                    </ul>
                </div>
                <div className='flex justify-center items-center '>
                    <Link to='/'><button className='btn text-white btn-primary mt-4'> <FaBackward></FaBackward> Back to Home</button></Link>
                </div>
            </div>
            <div>
                <h2 className="text-3xl text-center">Spacial</h2>
                <div>
                    <div className='text-'>
                        <FaParking></FaParking>
                        <span>Parking</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;