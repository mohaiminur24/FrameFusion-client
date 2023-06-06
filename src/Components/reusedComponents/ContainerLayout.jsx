import React from 'react';

const ContainerLayout = ({children}) => {
    return (
        <div className='w-11/12 mb-24 mt-10 mx-auto'>
            {children}
        </div>
    );
};

export default ContainerLayout;