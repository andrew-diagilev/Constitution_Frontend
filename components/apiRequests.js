import api from './api-config';

export const executeRequest = async (endpoint, method = 'GET', params = {}, data = null) => {
    console.log(data);
    try {
        const config = {
            method,
            url: endpoint,
            params,
            data,
        };
        const response = await api(config);
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
    } catch (error) {
        throw error;
    }
};