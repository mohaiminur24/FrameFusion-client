import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../reusedComponents/SectionTitle';
import AxiosFetch from '../../../CustomHook/AxiosFetch';
import PopularClassLayout from './PopularClassLayout';

const PopularClass = () => {
    const [popularclasses, setPopularclasses] = useState(null);
    const axiosSecure = AxiosFetch();
    useEffect(()=>{
        axiosSecure('/popularclass').then(res=> setPopularclasses(res.data));
    },[]);
    return (
        <div>
            <SectionTitle title="Popular Classes" description="Mastering the Art of Composition: Learn how to create visually captivating photographs through effective composition techniques and storytelling elements" />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5'>
                {
                    popularclasses && popularclasses.map((cls,index)=><PopularClassLayout key={index} singlecls={cls}/>)
                }
            </div>
        </div>
    );
};

export default PopularClass;