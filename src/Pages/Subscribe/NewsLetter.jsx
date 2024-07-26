import React from 'react';

const NewsLetter = () => {
    return (
        <div className='px-4 md:px-16 mx-4 md:mx-auto my-6 md:my-12 flex-col md:flex-row justify-center md:justify-between flex h-72 bg-gradient-to-r from-[#2f71ff5a] to-[#2f71ffd6] items-center rounded-lg border'>
            <div className=''>
                <h3 className='text-2xl md:text-4xl font-bold mb-2'>Subscribe for Newsletters</h3>
                <p className=''>Get E-mail updates about our latest surveys</p>
            </div>
            <div className='mt-6 md:mt-0 flex-row flex items-center'>
                <input placeholder='Enter email to get started' type="text" className='w-[150px] md:w-[400px] newsLetterInput outline-[#2F71FF] py-2 md:py-3 px-4 md:px-6 rounded-l-lg border-none'/>
                <button className='bg-[#2F71FF] text-white border-none hover:bg-[#2f71ffbf] py-2 md:py-3 px-4 md:px-6 rounded-r-lg '>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;