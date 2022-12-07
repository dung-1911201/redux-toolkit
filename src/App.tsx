import React from "react"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import ProductAdd from "./components/addProduct/addProduct"
import Product from "./components/product/product"
import Home from "./pages/home/Home"
import ProductDetail from "./pages/productDetail/ProductDetail"


function App() {

  return (
   <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="products" element={<Product/>} />
            <Route path="add-products" element={<ProductAdd/>} />
            <Route path="/product-detail/:id" element={<ProductDetail/>}>
          </Route>
      </Routes>
   </div>
  )
}

export default App
