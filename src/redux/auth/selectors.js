export const selectUser = (store) => store.auth.user;
export const selectToken = (store) => store.auth.token;
export const selectIsLoggedIn = (store) => store.auth.isLoggedIn;
export const selectIsRefreshing = (store) => store.auth.isLoading;
export const selectIsNewUser = (store) => store.auth.isNewUser;
export const selectError = (store) => store.auth.error;
