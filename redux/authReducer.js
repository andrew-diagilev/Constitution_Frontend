const initialState = {
    token: null, // Токен пользователя
    isLoading: false, // Флаг загрузки
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                isLoading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role,
                userId: action.payload.userId,
                username: action.payload.username,
                isLoading: false,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isLoading: false,

            };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                role: null,
                userId: null,
                username: null,
            };
        default:
            return state;
    }
};

export default authReducer;