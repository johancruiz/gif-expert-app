import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { UseFetchGifs } from '../hooks/UseFetchGifs';



export const GifGrid = ({category}) => {

    const {images, isLoading} = UseFetchGifs(category);

  return (
    <>
        <h1>{category}</h1>
        {
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid' >
            {images.map((image) =>(
                 <GifItem 
                    key={image.id} 
                    {...image}
                />
            ))
            }
            
        </div>
    </>
  )
}
