import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL || 'https://vitor-stabile-sds2.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery (orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}