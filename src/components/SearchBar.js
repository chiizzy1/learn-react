import React from 'react'

function SearchBar({ inputText, inStock,  onInputTextChange,  onInStockChange }) {

  // console.log(inputText, inStock,   onInputTextChange, onInStockChange);

  // function handleChange(event){
  //   const { type, value, checked, name } = event.target

  //   if (type === 'checkbox'){
  //     setCardDetails( prevDetails => {
  //       return {
  //         ...prevDetails, inStock: checked
  //       }
  //     } )
  //   }

  //   else{
  //     setCardDetails( prevDetails => {
  //       return{
  //         ...prevDetails, inputText: value
  //       }
  //     } )
  //   }
  // }

  return (
    <form>
        <input 
          type="text"
          value={inputText} 
          name="fruit"
          onChange={ (e) => onInputTextChange( e.target.value )}
          // onChange={ (e) => setCardDetails( old => ({...old, inputText: e.target.value}) ) }
          placeholder="search..." 
        /><br />

        <label>
           <input 
              type="checkbox" 
              checked={inStock}
              name="checked"
              onChange={ (e) => onInStockChange( e.target.checked )}
              // onChange={ (e) => setCardDetails( old => ({...old, inStock: e.target.checked}) )}
           /> 
           {' '}
           Only show products in stock
        </label>
    </form>
  )
}

export default SearchBar