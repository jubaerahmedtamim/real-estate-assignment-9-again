import React from 'react';
import { BiArea } from 'react-icons/bi';
import { TbCategory, TbCoinTaka, TbCurrentLocation } from "react-icons/tb";
import { Link } from 'react-router-dom';

const EstateCard = ({ data }) => {
    const { estate_title, segment_name, description, area, location, price, status, id, image_url } = data;
    return (
        <div className="card bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
        >
            <figure>
                <img className='relative' src={image_url} alt="image" />
                <div className="absolute top-5 right-5 text-white font-semibold badge badge-secondary">{status}</div>
            </figure>
            <div className="p-6 space-y-4">
                <div className='flex justify-between'>
                    <p className='flex items-center gap-2'><TbCoinTaka /> <span>{price}</span> </p>
                    <p className='flex items-center gap-2'><TbCategory /> <span>{segment_name}</span> </p>
                </div>
                <h2 className="text-2xl">{estate_title}</h2>
                <p className='text-md'>{description}</p>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-2'><TbCurrentLocation /> <span>{location}</span></p>
                    <p className='flex items-center gap-2'><BiArea /> <span>{area}</span></p>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/property-details/${id}`}><button className="btn text-lg w-full btn-primary">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;