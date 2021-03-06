import React, { createContext, SetStateAction, ReactNode, useState, Dispatch, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { IUser } from '../../services/user';

interface InitContextProps {
    state: IUserContext;
    setState: Dispatch<SetStateAction<IUserContext>>;
}
interface IProps {
    children: ReactNode;
    initialState: IUserContext;
}

interface IUserContext {
    users: IUser[];
}

const UsersContext = createContext<InitContextProps | undefined>(undefined);

export const Provider = (props: IProps) => {
    const { initialState, children } = props;
    const [state, setState] = useState<IUserContext>(initialState);

    return (
        <UsersContext.Provider value={{ state, setState }}>
            {children}
        </UsersContext.Provider>
    );
}

export function useUsersContext() {
    const context = useContext(UsersContext);

    if (context === undefined) {
        throw new Error('Context must be used within a provider')
    }

    return context
}

Provider.propTypes = {
    children: PropTypes.node.isRequired
};
