import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


function ProductCard({ products,  inputText, inStock }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (product.name.toLowerCase().indexOf(inputText.toLowerCase()) === -1 ){
        return;
      }

      if ( inStock && !product.stocked){
        return
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    // console.log(rows);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

export default ProductCard