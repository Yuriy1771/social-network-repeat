import React from 'react';
import store from "./Redux/redux-store";
const storeContext = React.createContext(null);

export function Provider(props) {
    return (
        <storeContext.Provider value={store}>
            {props.children}
        </storeContext.Provider>
    )
}

export default storeContext;