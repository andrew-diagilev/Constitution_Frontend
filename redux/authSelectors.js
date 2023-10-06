export const isLoggedIn = (state) => state.auth.token !== null;
export const selectToken = (state) => state.auth.token;