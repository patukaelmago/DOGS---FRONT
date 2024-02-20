import React from 'react';
import { Link } from 'react-router-dom';

export default function Card ({image, name, id}){
  
    return (
      <div className='my-10'>
        <Link to={`/detail/${id}`}>
          <div className=''>
            <div className='mb-2'>
              <h2 className='text-black text-2xl font-extrabold'>{name}</h2>
            </div>
            {/* <div className='temps'>
              {temperaments && typeof temperaments[0] === 'object'? temperaments?.map(t=>(
              t.name + ', '
              )):temperaments?.join(', ')}
            </div > */}
            <div className="">
                <img className="h-[156px] w-[180px] rounded-3xl mx-auto" src={image} alt={`${name}`} />
            </div>
            {/* <div className='weight'>
              <h4 className='info'>Min Weight: {weightMin} kg</h4>
              <h4 className='info'>Max Weight: {weightMax} kg</h4>
            </div> */}
          </div>
        </Link>
      </div>
    )
}