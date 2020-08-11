import React, { ReactNode, useState, Dispatch, useReducer } from 'react';
import PropTypes from 'prop-types';
import { IPermission } from '../../services/permission';

interface InitContextProps {
    state: IPermissionContext;
    setState: Dispatch<React.SetStateAction<IPermissionContext>>;
}

export const PermissionsContext = React.createContext({} as InitContextProps);

interface IProps {
    children: ReactNode;
    initialState: IPermissionContext;
}

interface IPermissionContext {
    permissions: IPermission[];
}


export const Provider = (props: IProps) => {
    const { initialState, children } = props;
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [state, setState] = useState<IPermissionContext>(initialState);

    return (
        <PermissionsContext.Provider value={{ state, setState }}>
            {children}
        </PermissionsContext.Provider>
    );
}

// const reducer = (state: IPermissionContext, newState: IPermissionContext) => ({ ...state, ...newState });

Provider.propTypes = {
    children: PropTypes.node.isRequired
};
