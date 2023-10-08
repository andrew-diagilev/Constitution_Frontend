export const isLoggedIn = (state) => state.auth.token !== null;
export const selectToken = (state) => state.auth.token;
export const selectUserId = (state) => state.auth.userId;
