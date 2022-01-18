import React from 'react';
import {BrowserRouter as Router , Switch , Route , Link } from 'react-router-dom';
import Customers from './components/Customers';
import Navbar from './components/Navbar';
import Products from './components/Products';
import About from './components/About';
import ProductDetails from "./components/ProductDetails"

function App() {
    return (
        <div>
           <Router>
        <Navbar />
               <Switch>
                     
                   <Route path="/products"> 
                   <Products/>
                   </Route>
                   <Route path="/customers">
                        <Customers/>
                   </Route>
                   <Route path="/about">
                       <About/>
                   </Route>
                  <Route path="/productdetails/:id">
                      <ProductDetails/>
                  </Route>
                   
               </Switch>
           </Router>
        </div>
    )
}

export default App
