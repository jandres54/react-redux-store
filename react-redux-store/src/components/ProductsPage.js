import React from 'react';

export default function ProductsPage(props) {
    return (
        <div>
             {props.productsFromCache.name}
            {props.productsFromCache.price}
            {/* {props.productsFromCache.title} */}
            <img src={props.productsFromCache.image} alt="" />
        </div>
    )
}

