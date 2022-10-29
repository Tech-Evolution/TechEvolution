import { createContext, useEffect, useState } from "react";

import {products as data} from "../data/products"

export const ProductContext = createContext()

const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    }, [])

    // function getProduct(id) {
    //   console.log(id)
    //   setProducts(products.filter((item) => item.id === id));
    // }

    // function createProduct(product) {
    //   setProducts([
    //     ...products,
    //     {
    //       id: products.length,
    //       name: product.name,
    //       description: product.description,
    //       category: product.category,
    //       price: product.price,
    //       image: product.image
    //     },
    //   ]);
    // }
  
    // function deleteProduct(id) {
    //   setProducts(products.filter((product) => product.id !== id));
    // }

  return (
    <ProductContext.Provider 
      value={
        products
      }
      >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductProvider