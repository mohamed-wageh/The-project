import { createContext, useState, useEffect } from "react";
import request from '../services/services'
export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        accessToken: localStorage.getItem('accessToken'),
        user: JSON.parse(localStorage.getItem('userData')) ?? null
    });

    useEffect(() => {
        if (auth.user) {
            request.changeToken(auth.accessToken)
            localStorage.setItem('accessToken', auth.accessToken)
        } else {
            request.changeToken(null)
            localStorage.removeItem('accessToken')
        }
    }, [auth.accessToken])


    useEffect(() => {
        if (auth.user) {
            localStorage.setItem('userData', JSON.stringify(auth.user))
        } else {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('userData')
        }
    }, [auth.user])

    const reset = () => {
        setAuth({
            accessToken: '', user: null
        })
    }
    return <AuthContext.Provider value={[auth, setAuth, reset]}>
        {props.children}
    </AuthContext.Provider>
}