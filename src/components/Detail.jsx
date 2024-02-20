import React from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions/index';
import { useEffect } from "react";
import Loading from "./Loading";
import Footer from './Footer';

export default function Detail(props){
    const dispatch = useDispatch();
    const history=useHistory();
    const myDog = useSelector((state) => state.detail)
   
    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    },[dispatch])

    function handleHistory(){
        history.push("/home")
    }

    return (
        <>
        <div className="pb-4 pt-8 h-screen">
            {
                myDog.length?
                <>
                <div className='detail-card'>
                    <div className="mb-2">
                    <h1 className="text-black text-2xl font-extrabold pb-6"> {myDog[0].name}</h1>
                    </div>
                    <div className="flex justify-center">
                    <img className="pb-4 h-[500px]" src={myDog[0].image} alt={myDog[0].name} ></img>
                    </div>
                    <div className="pb-8">
                    <h2 className="font-extrabold mx-4 pt-4">{myDog[0].createdInDb === true ? myDog[0].temperaments?.map(t => t.name +"/ ") :  myDog[0].temperaments?.join(', ')}</h2>
                    <br/>
                    <h3 className="font-bold">Weight:     {myDog[0].weightMin} - {myDog[0].weightMax}</h3>
                    <h3 className="font-bold">Height:     {myDog[0].heightMin} - {myDog[0].heightMax}</h3>
                    <h3 className="font-bold">Lifespan:     {myDog[0].lifespan}</h3>
                    </div>
                </div>
                <div className="">
                <button onClick={handleHistory} className="border px-3 text-xl py-1 rounded-xl  font-bold">Back</button>
                </div>
                </>
                : <Loading/>
            }
           <Footer />
        </div>
        </>
    )
}
