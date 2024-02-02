import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Movie = ({ shows }) => {
    const [data, setDetail] = useState({});
    const id = useSearchParams()[0].get('id')

    useEffect(() => {
        shows && shows.forEach(item => {
            if (item.show.id === Number(id)) setDetail(item);
        })
    }, [id])

    console.log('movie id', id, 'with data', data);

    return (
        <div>
            Movie {id}

        </div>
    )
}

export default Movie
