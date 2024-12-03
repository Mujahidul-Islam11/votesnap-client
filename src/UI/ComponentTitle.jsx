import React from 'react';

const ComponentTitle = ({title, desc}) => {
    return (
        <header>
            <h3 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-4">
                {title}<span className="text-[#2F71FF]">!</span>
            </h3>
            <p className="text-sm md:text-xl text-center text-gray-600">{desc}</p>
        </header>
    );
};

export default ComponentTitle;