import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Loading from "./Loading";
import Footer from './Footer';

import { 
    getDogs, 
    getTemperaments, 
    filterDogsByTemperament, 
    sortByName,  
    sortByWeight,
    filterCreated,
    clearDetail,
    } from "../redux/actions";
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";


export default function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.dogs);
   
    const allTemperaments = useSelector((state) => state.temperaments);
    const [currentPage, setCurrentPage] = useState(1); 
    const [dogsPerPage, setDogsPerPage] = useState(8); 
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
    const currentDogs = allDogs?.slice(indexOfFirstDog, indexOfLastDog); 
    const [_orden, setOrden] = useState('');
    const [clean, setClean] = useState({temperaments:"",created:"",weight:"", name:""}); 
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => { 
       if(!allDogs.length > 0) {dispatch(getDogs())
        dispatch(getTemperaments())}
        dispatch(clearDetail())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs())
        setCurrentPage(1);
    }

    function handleFilterTemperaments(e) {
        e.preventDefault(e);
        dispatch(filterDogsByTemperament(e.target.value))
        setClean({
            ...clean, temperaments:e.target.value
        }); 
        e.target.value = "Filter Temperaments"
        setCurrentPage(1);
        setOrden(e.target.value);
    }
    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setClean({
            ...clean, created:e.target.value
        }); 
        e.target.value = "Filter by Origin"
        setCurrentPage(1);
        setOrden(e.target.value);
    }

    function handleSortByName(e) {
        e.preventDefault();
        dispatch(sortByName(e.target.value));
        setClean({
            ...clean, name:e.target.value
        }); 
        e.target.value = "Sort by name"
        setCurrentPage(1);
        setOrden(e.target.value);
    }
    function handleSortByWeight(e) {
        e.preventDefault();
        dispatch(sortByWeight(e.target.value));
        setClean({
            ...clean, weight:e.target.value
        }); 
        e.target.value="Sort by weight"
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }
    
    return (
        <>
        <div className=" mx-auto">
        { 
            allDogs.length?
            <>
                <div className="container mx-auto max-w-md">
                    <h1 className="text-6xl font-extrabold pt-4 mb-3"><strong>Dogs</strong></h1>
                    <h3 className="text-lg font-extrabold pb-4">Unconditional Love</h3>
                    <div className="rounded-xl border mx-4 py-1 font-bold text-xl mb-4">
                            <SearchBar 
                            setCurrentPage={setCurrentPage} />
                        </div>
                    <div  className="rounded-xl border mx-4 py-1 font-bold text-xl mb-4">
                        <Link to='/dogs'>
                            <button value="dog"> 
                               <h3>Create Dog</h3> 
                            </button>
                        </Link>
                    </div>
                    <div className="rounded-xl border mx-4 py-1 font-bold text-xl mb-4">
                        <button className='elementNA' onClick={e => { handleClick(e) }} >
                           <h3 >All Dogs</h3>
                        </button>
                    </div>
                    <div className="rounded-xl border mx-4 py-1 font-bold text-xl mb-4">
                        <select  className='bg-teal-500'defaultValue='selected' onChange={e => handleSortByName(e)} >
                            <option hidden value="Sort by name">{clean.name || "Sort by name"}</option>
                            <option value='selected' disabled >Breed</option>
                            <option value='Ascendent'>A - Z</option>
                            <option value='Descendent'>Z - A</option>
                        </select>
                    </div>
                    <div className="rounded-xl border mx-4 py-1 font-bold text-xl mb-4">
                        <select className="bg-teal-500" defaultValue='selected' onChange={e => handleSortByWeight(e)}  >
                            <option hidden value="Sort by weight">{clean.weight || "Sort by weight"}</option>
                            <option value='selected' disabled >Weight</option>
                            <option value='Lighter to heavier'>Lighter to heavier</option>
                            <option value='Heavier to lighter'>Heavier to lighter</option>
                        </select>
                    </div>
                    <div className="rounded-xl border mx-4 py-1 font-bold text-xl mb-4">
                        <select className='bg-teal-500' defaultValue='selected' onChange={e => handleFilterCreated(e)}>
                            <option hidden value="Filter by Origin">{clean.created || "Filter by Origin"}</option>
                            <option value="selected" disabled >Origin</option>
                            <option value="Api Dogs">API</option>
                            <option value="In Database">DB</option>
                        </select>
                    </div>
                    <div className="rounded-xl border mx-4 py-1 font-bold text-xl mb-4">
                        <select className='bg-teal-500' defaultValue='selected' name='temperaments' onChange={e => handleFilterTemperaments(e)} >
                            <option hidden value="Filter Temperaments">
                                {clean.temperaments || "Filter Temperaments"}
                            </option>
                            <option value='selected' disabled >Temperaments</option>
                            <option value='all'>All</option>
                            {allTemperaments.map(t => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 '>
                    {currentDogs?.map(d => {
                    return (
                        <Card 
                        key={d.id}
                        id={d.id}
                        image={d.image}
                        name={d.name}
                        temperaments={d.temperaments}
                        weightMin={d.weightMin}
                        weightMax={d.weightMax}
                        heightMin={d.heightMin}
                        heightMax={d.heightMax}
                        className="h-[200px]"
                         />
                    )})}
                </div>
                <div >
                    {<Paginado 
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginado = {paginado}
                    currentPage={currentPage}/>}
                </div>
            </>
            : <Loading/>
        }
        </div>
        <Footer />
        </>
    )
}