import React from 'react';
import loading from '../images/loading-dog.gif';
import { useSelector } from 'react-redux';

export default function Loading(){
    const allDogs = useSelector((state) => state.dogs);

    return (
        <div className='flex justify-center h-screen'>
            <div className='flex items-center '>
                <img className='h-[200px]' src={loading} alt='Loading'/>
            </div>
        </div>
    )
} 