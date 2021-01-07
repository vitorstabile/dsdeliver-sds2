import React, { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import { Product } from './types';
import ProductsList from './ProductsList';
import './styles.css';
import { fetchProducts } from '../api';

function Orders() {
    const [products, setProducts] = useState<Product []>([]);
console.log(products);

useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
}, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
        </div>
    )
}

export default Orders;