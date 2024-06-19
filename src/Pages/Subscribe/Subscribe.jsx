import React from 'react';

const Subscribe = () => {
    return (
        <div style={{background: "url(https://i.ibb.co/sWNDWcF/photo-1597839219216-a773cb2473e4.jpg)"}} className='px-4 md:px-16 my-6 md:my-12 flex-col md:flex-row justify-center md:justify-between flex h-80 bg-opacity-60 items-center rounded-lg'>
            <div className=''>
                <h3 className='text-2xl md:text-4xl text-white font-bold'>Subscribe for Newsletters</h3>
                <p className='text-white'>Get E-mail updates about our latest surveys</p>
            </div>
            <div className='mt-6 md:mt-0 flex-col md:flex-row flex gap-6 items-center'>
                <input placeholder='Enter email to get started' type="text" className='md:w-[400px] border-none outline-gray-200 bg-gray-800 py-3 px-6 text-white rounded-lg '/>
                <button className='btn btn-primary bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf]'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;