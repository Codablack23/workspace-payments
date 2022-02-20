import {useState,useContext} from 'react'
import '../styles/user.scss'
import Navbar from "../components/user/navbar"
import {navlist} from '../components/user/navConfig'
import PaymentContextProvider from '../contexts/paymentContext'


export default function User(){
    const [page,setPage]=useState("Reports")
    return(
       
        <div className="User">
         <PaymentContextProvider>
         <Navbar navigate={setPage} activePage={page}/>

         { 
            navlist.map(link=>
                 link.page == page && <link.Comp navigate={setPage} />
          )}
        </PaymentContextProvider>
        </div>
        
    )
}