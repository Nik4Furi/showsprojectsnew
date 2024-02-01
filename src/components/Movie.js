import React from 'react'
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect ,useState } from 'react';

const Movie = () => {
const [data, setDetail] = useState({});
const [query, setQuery] = useSearchParams()
console.log(query)
const { id } = useParams();
useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch(`api.url/${id}`)
      .then(response => setDetail(response.data))
      .catch(error => console.error('Error fetching detail:', error));
  }, [id]);
console.log(id)
  return (
    <div>
      Movie
    
    </div>
  )
}

export default Movie
