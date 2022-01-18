import React from 'react'
import {useParams} from "react-router-dom"
const ProductDetails = () => {
    const {id} = useParams();
    const data = [{
        id: 1, 
        title: "Mobile",
        desc: "This is sumsung mobile."
    },
    {
        id: 2, 
        title: "laptop",
        desc: "This is dell laptop."
    },
    {
        id: 3, 
        title: "pc",
        desc: "This is pentium 4 system."
    }]
       const prod = data.filter((product) =>  product.id == id);
    return (
        <div>
            <h1>This is products detail of {id}</h1>
           <p>id: {prod[0].id}</p>
           <p>id: {prod[0].title}</p>
           <p>id: {prod[0].desc}</p>
        
        </div>
    )
}

export default ProductDetails
