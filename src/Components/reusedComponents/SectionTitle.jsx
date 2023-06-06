import React from 'react';

const SectionTitle = ({title,description}) => {
    return (
        <div className='text-center space-y-2 mb-10'>
            <h1 className='text-2xl font-inter font-semibold uppercase'>{title}</h1>
            <p className='text-xs w-3/5 mx-auto font-Raleway opacity-60'>{description}</p>
        </div>
    );
};

export default SectionTitle;