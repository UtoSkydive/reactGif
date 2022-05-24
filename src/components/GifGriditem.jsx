import React from 'react'

const GifGriditem = ({id,title,url}) => {
    console.log(id)
  return (
    <div className='card animate__fadeInDown'>
       <img src={url.url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GifGriditem