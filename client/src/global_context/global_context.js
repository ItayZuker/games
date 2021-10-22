import React, { useState } from "react";
const GlobalContext = React.createContext();

const GlobalContextComponent = (props) => {

    let [test, setTest] = useState('lalalal')

    const contextValue = {
        test,
        setTest
    }

    return (
        <GlobalContext.Provider value={ contextValue }>
            { props.children }
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextComponent }
