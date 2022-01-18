import React from 'react'
import {Link} from "react-router-dom";
const Products = () => {
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
    }
    , {
        id: 3, 
        title: "pc",
        desc: "This is pentium 4 system."
    }, {
        id: 3, 
        title: "pc",
        desc: "This is pentium 4 system."
    }, {
        id: 3, 
        title: "pc",
        desc: "This is pentium 4 system."
    }
]
    return (
        <div>
            <h1>This is products list</h1>
             {data.map((product) =>{
                 return <p><Link to={`/productdetails/${product.id}`}>{product.title}</Link>
                 </p>
                          
             })}
        </div>
    )
}

export default Products
