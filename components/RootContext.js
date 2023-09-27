import React, { createContext, useContext, useState } from 'react';

const RouteContext = createContext();

export const useRouteContext = () => {
    return useContext(RouteContext);
};

export const RouteProvider = ({ children }) => {
    const [currentRoute, setCurrentRoute] = useState('');

    const updateCurrentRoute = (route) => {
        setCurrentRoute(route);
    };

    return (
        <RouteContext.Provider value={{ currentRoute, updateCurrentRoute }}>
            {children}
        </RouteContext.Provider>
    );
};