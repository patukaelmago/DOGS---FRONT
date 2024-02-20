import React from 'react';
import { Link } from 'react-router-dom';
import { FaBone } from "react-icons/fa";

export default function LandingPage(){
    return (
        <>
        <div className='bg-teal-500 h-screen flex flex-col justify-center items-center'>
            <Link to='/home'>
              <button className='landingButton'>
                <h1 className='text-4xl font-extrabold' >
                    <span> Welcome to Dogs </span>
                </h1> 
              </button>
            </Link>
            <Link to='/home'>
              <FaBone className='text-4xl '/>
            </Link>
        </div> 
        </>
    )
}