import {useState,useContext} from 'react'
import  {AuthContext} from '../../contexts/authContext'
import Home from '../../pages/home'
import User from '../../pages/user'


export default function CheckUser(){
    const {auth} = useContext(AuthContext)
    console.log(auth)
    return(
      <div>
          {auth.isLoggedIn?<User/>:<Home/>}
      </div>
    )
  }