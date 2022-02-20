import { createContext,useReducer } from 'react'
import { paymentReducer } from '../reducers/paymentReducer'

export const  PaymentContext = createContext()

export default function PaymentContextProvider({children}){
  const [payments,dispatch] = useReducer(paymentReducer,{
      all_reports:[],
      sent_reports:[],
  })

  return (
    <PaymentContext.Provider value={{payments, dispatch,}}>
     {children} 
   </PaymentContext.Provider>
  )
}
