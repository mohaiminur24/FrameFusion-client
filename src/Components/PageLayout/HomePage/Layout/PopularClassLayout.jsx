import React from 'react';

const PopularClassLayout = ({singlecls}) => {
    const {ClassName,InstractorName,TotalStudent,aviableseats,instractorEmail,price,thumbnail} = singlecls;
    return (
        <div className="p-5 shadow-md rounded-md">
            <img className='w-full h-60 rounded-md' src={thumbnail}/>
            <div className='mt-3 font-Raleway text-sm'>
                <h1 className='font-Inter text-lg font-semibold'>{ClassName}</h1>
                <h1><span className='font-semibold font-Inter'>Instractor:</span> {InstractorName}</h1>
                <h2><span className='font-semibold font-Inter'>Email:</span> {instractorEmail}</h2>
                <h3><span className='font-semibold font-Inter'>Enroll Student:</span> {TotalStudent}</h3>
                <h4 className={aviableseats<3 && "text-red-500"}><span className='font-semibold font-Inter'>Available seats:</span> {aviableseats}</h4>
                <h5><span className='font-semibold font-Inter'>Enroll Price:</span> ${price}</h5>
            </div>
            
        </div>
    );
};

export default PopularClassLayout;