import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    auth: authReducer,
});

// Создайте персистированный редуктор
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создайте хранилище с персистированным редуктором
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk], // Добавьте необходимые middleware
});

// Создайте объект персистора для Redux-Persist
const persistor = persistStore(store);

export { store, persistor };