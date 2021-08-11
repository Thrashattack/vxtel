import axios from 'axios';

export function listing(payload) {
    const response = await axios.get(process.env.LISTING_MICROSERVICE_URL + '/' + payload);
    
    return response.data;
}