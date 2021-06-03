import React from 'react';

const Data = () => {
    const product = fetch (`https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid`)
        




    console.log(product)

    return (
        <div>
            <div>
                <h1>data</h1>
            </div>
            <Data/>
        </div>
    );
}

export default Data;
