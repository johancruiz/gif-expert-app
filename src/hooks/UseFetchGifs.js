import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const UseFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async(category) => {
        const newImage = await getGifs(category);
        setImages(newImage)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages(category);
    },[])

    return {
        images,
        isLoading
    }
}


