import React, { useState, useEffect  } from 'react'

export const AuthContext = React.createContext()

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        
    }, [])

    return (
        <AuthContext.Provider
        value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}