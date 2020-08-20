import React, { Dispatch, SetStateAction, createContext, ReactNode, useState } from 'react';

interface ContextProps<T> {
    state: T;
    setState: Dispatch<SetStateAction<T>>;
}

export default function Context<T>(children: ReactNode, initialState: T) {
    const Context = createContext<ContextProps<T> | undefined>(undefined);
    const [state, setState] = useState<T>(initialState);
    const Provider = () => (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    )
    function useContext() {
        const context = React.useContext(Context);

        if (context === undefined) {
            throw new Error('Context must be used within a provider');
        }

        return context;
    }

    return { useContext, Provider };
}