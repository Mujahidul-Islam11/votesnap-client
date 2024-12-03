import React from 'react';

const ComponentTitle = ({titleFirst, titleLast, desc}) => {
    return (
        <header className='mb-4'>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4">
                {titleFirst}<span className="text-[#2F71FF] font-extrabold">{titleLast}!</span>
            </h3>
            <p className="text-sm md:text-xl text-center text-gray-600">{desc}</p>
        </header>
    );
};

export default ComponentTitle;