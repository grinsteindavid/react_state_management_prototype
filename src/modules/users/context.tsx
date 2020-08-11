import React, { ReactNode, useState, Dispatch, useReducer } from 'react';
import PropTypes from 'prop-types';
import { IUser } from '../../services/user';

interface InitContextProps {
    state: IUserContext;
    setState: Dispatch<React.SetStateAction<IUserContext>>;
}

export const UsersContext = React.createContext({} as InitContextProps)

interface IProps {
    children: ReactNode;
    initialState: IUserContext;
}

interface IUserContext {
    users: IUser[];
}


export const Provider = (props: IProps) => {
    const { initialState, children } = props;
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [state, setState] = useState<IUserContext>(initialState);

    return (
        <UsersContext.Provider value={{ state, setState }}>
            {children}
        </UsersContext.Provider>
    );
}

// const reducer = (state: IPermissionContext, newState: IPermissionContext) => ({ ...state, ...newState });

Provider.propTypes = {
    children: PropTypes.node.isRequired
};
