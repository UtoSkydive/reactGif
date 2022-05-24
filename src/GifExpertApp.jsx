import React,{useState} from 'react'
import Addcategory from './components/Addcategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const cat = ['One punch']
  const [categories, setcategories] = useState(cat);

  // const handleAdd = () =>{
  //   // let cateCopy = [...categories]
  //   // cateCopy.push('loca')
  //   // setcategories(cateCopy)
  //   setcategories(cat => [...cat,"hunter"])
  // }
  return (
    <>

      <h2 className='animate__fadeInDown'>GifExpertApp</h2>
      <hr></hr>
      <Addcategory setcategories={setcategories} />
      {/* <button onClick={handleAdd}>Agregar categoria</button> */}
      <ol>
        {
          categories.map((item)=>{
            return (
             <GifGrid category={item} key={item}/>
            )
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp