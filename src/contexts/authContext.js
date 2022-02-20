import { createContext,useReducer } from 'react'
import {authReducer} from '../reducers/authReducer'

export const  AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [auth,dispatch] = useReducer(authReducer,{
        isLoggedIn:false,
        user:null
    })
  return (
    <AuthContext.Provider value={{auth, dispatch}}>
    {children} 
   </AuthContext.Provider>
  )
}
  
