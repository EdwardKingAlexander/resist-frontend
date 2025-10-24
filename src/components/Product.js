import React from 'react';
import {} from 'react-bootstrap';

function Product({product}) {
    return(
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )

}

export default Product;