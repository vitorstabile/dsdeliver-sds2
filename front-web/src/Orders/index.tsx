import React, { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import { OrderLocationdata, Product } from './types';
import ProductsList from './ProductsList';
import './styles.css';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
    const [products, setProducts] = useState<Product []>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
}, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}

export default Orders;