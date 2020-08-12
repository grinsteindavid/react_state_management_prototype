import React, { ReactNode, useState, Dispatch, createContext, SetStateAction, useReducer } from 'react';
import PropTypes from 'prop-types';
import { IPermission } from '../../services/permission';

interface InitContextProps {
    state: IPermissionContext;
    setState: Dispatch<SetStateAction<IPermissionContext>>;
}

interface IProps {
    children: ReactNode;
    initialState: IPermissionContext;
}

interface IPermissionContext {
    permissions: IPermission[];
}

const PermissionsContext = createContext<InitContextProps | undefined>(undefined);


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

export function usePermissionsContext() {
    const context = React.useContext(PermissionsContext);

    if (context === undefined) {
        throw new Error('Permissions Context undefined initial state')
    }

    return context
}

Provider.propTypes = {
    children: PropTypes.node.isRequired
};
