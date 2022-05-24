import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGriditem from './GifGriditem';

const GifGrid = ({category}) => {
  
  const {data:images,loading} = useFetchGifs(category)
  
  
  return (
    <>
      <div className='animate__fadeInDown'>{category}</div>
      {loading && <p>Loading</p> }
      <div className="card-grid">
        {images.map((img) => (
          <GifGriditem
            key={img.id}
            // img={img}
            {...img}
          />
        ))}
      </div>
    </>
  );
}

export default GifGrid