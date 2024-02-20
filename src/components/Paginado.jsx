import React from 'react';

export default function Paginado({dogsPerPage, currentPage, allDogs, paginado}){
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav className=''>
          <div className=''>
            <div className=''>
            {
              currentPage > 1 ? <button  onClick={()=>paginado(currentPage - 1)}> <h1 className='text-2xl p-2 mx-2 text-extrabold '>❮</h1> </button>:
              <button disabled><h1 className='text-2xl p-2 text-extrabold mx-2'>❮</h1>  </button>
            }
             {
              currentPage < pageNumbers.length ? <button className='flechas' onClick={()=>paginado(currentPage + 1)}><h1 className='text-2xl p-2 text-extrabold mx-2'>❯</h1> </button>:
              <button  disabled><h1 className='text-2xl p-2 text-extrabold mx-2'>❯</h1>  </button>
            }
            </div>
          </div>
          <div className='paginado'>
        {
          pageNumbers?.map(num=>(
            <span key={num}>
              <button className='p-2 text-xl font-bold' onClick={()=>paginado(num)} ><strong>{num}</strong></button>
            </span>
          ))
        }
          </div>
        </nav>
      )
    }