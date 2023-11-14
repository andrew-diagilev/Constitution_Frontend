import { executeRequest } from '../components/apiRequests';

export const fetchTestData = async (testId) => {
    try {
        const data = await executeRequest(`/api/tests/?testId=${testId}`, 'GET');
        return data;
    } catch (error) {
        console.error('Error fetching test data:', error);
        throw error;
    }
};

export const submitAnswer = async (testId, questionId, answerId) => {
    try {
        const data = await executeRequest('/api/tests/submit-answer', 'POST', {}, {
            testId,
            questionId,
            answerId,
        });
        return data;
    } catch (error) {
        console.error('Error submitting answer:', error);
        throw error;
    }
};

export const deleteTestResult = async (testId) => {
    try {
        await executeRequest(`/api/tests/result/${testId}`, 'DELETE');
    } catch (error) {
        console.error('Error deleting test result:', error);
        throw error;
    }
};