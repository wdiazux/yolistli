import React, { createContext, useState } from 'react'

interface InitContextProps {
    scenarioUrl: string
    setScenarioUrl: React.Dispatch<React.SetStateAction<string>>
}
const GlobalContext = createContext({} as InitContextProps)

const GlobalProvider: React.FC = ({ children }) => {
    const [scenarioUrl, setScenarioUrl] = useState('')

    const contextValues = {
        scenarioUrl: scenarioUrl,
        setScenarioUrl: setScenarioUrl,
    }

    return (
        <GlobalContext.Provider value={contextValues}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }
