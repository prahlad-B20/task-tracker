import React, { createContext, useState } from 'react';

export const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
    const [exampleState, setExampleState] = useState(null);

    const updateExampleState = (newState) => {
        setExampleState(newState);
    };

    return (
        <ExampleContext.Provider value={{ exampleState, updateExampleState }}>
            {children}
        </ExampleContext.Provider>
    );
};