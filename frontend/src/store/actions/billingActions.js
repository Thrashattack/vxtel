import axios from 'axios';

export function billing(payload) {
    const response = await axios.post(process.env.BILLING_MICROSERVICE_URL, payload);
    
    return response.data;
}