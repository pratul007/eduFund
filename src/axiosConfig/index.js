import axios from 'axios';

export default class API {
    constructor(o) {
        this.client = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL || 'https://api.mfapi.in/',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (o && o.agent) this.agent = o.agent;
    }

    get = (endpoint) => {
        this.client.defaults.headers['Content-Type'] = 'application/json';
        return this.client.get(
            endpoint,
            // Wait for no more than 15 seconds
            { timeout: 15000 }
        );
    };

}
