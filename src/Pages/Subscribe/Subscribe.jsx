import React from 'react';

const Subscribe = () => {
    return (
        <div className='px-4 md:px-16 mx-4 md:mx-auto my-6 md:my-12 flex-col md:flex-row justify-center md:justify-between flex h-72 bg-opacity-30 items-center rounded-lg border'>
            <div className=''>
                <h3 className='text-2xl md:text-4xl font-bold mb-2'>Subscribe for Newsletters</h3>
                <p className=''>Get E-mail updates about our latest surveys</p>
            </div>
            <div className='mt-6 md:mt-0 flex-col md:flex-row flex gap-6 items-center'>
                <input placeholder='Enter email to get started' type="text" className='md:w-[400px] newsLetterInput outline-[#2F71FF] py-3 px-6 rounded-lg border'/>
                <button className='btn btn-primary bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf]'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;