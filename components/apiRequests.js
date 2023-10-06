import ApiConfig from './api-config';

export const executeRequest = async (endpoint, method = 'GET', params = {}, data = null, token = null) => {
    try {
        const config = {
            method,
            url: endpoint,
            params,
            data,
        };
        const response = await ApiConfig(config, token);
        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
    } catch (error) {
        throw error;
    }
};