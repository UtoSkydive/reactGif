import React,{useState} from 'react'
import PropTypes from 'prop-types';
const Addcategory = ({setcategories}) => {
    const [inputValue, setInput] = useState("");
    const handleInputChange = (e) =>{
        setInput(e.target.value)
    }
    const handleSumbit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length > 1){
            setcategories(categories => [inputValue,...categories])
            setInput('')
        }
    }
  return (
    <>
      <h1>{inputValue}</h1>
      <form onSubmit={handleSumbit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
}
Addcategory.prototype ={
    setcategories: PropTypes.func.isRequired
}
export default Addcategory