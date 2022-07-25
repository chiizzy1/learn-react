import React, { useState } from 'react'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'

function Card({products}) {
    // console.log(products);
  const [inputText, setInputText] = useState('')
  const [inStock, setInStock] = useState(false)

  // const [cardDetails, setCardDetails] = useState(
  //     { inputText:"", inStock: false}
  // )

  return (
    <div className='card'>

        {/* <SearchBar 
          inputText={cardDetails.inputText}
          inStock={cardDetails.inStock}
          setCardDetails={setCardDetails}
        />

        <ProductCard 
          products={products}
          inputText={cardDetails.inputText}
          inStock={cardDetails.inStock}
        /> */}


        <SearchBar 
          inputText={inputText}  
          inStock={inStock}
          onInputTextChange={setInputText}
          onInStockChange={setInStock}
        />

        <ProductCard 
          products={products}
          inputText={inputText}
          inStock={inStock}
        />
        

    </div>
  )
}

export default Card