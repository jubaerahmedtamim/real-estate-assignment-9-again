import EstateCard from '../EstateCard/EstateCard';

const Estate = ({ data }) => {
    return (
        <div className='my-8'>
            <h2 className="text-2xl text-center font-semibold mb-8"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            >Choose your Domicile.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data.map(residence => <EstateCard
                        key={residence.id} data={residence}
                    ></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estate;