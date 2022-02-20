import { useState } from "react"
import {navlist} from './navConfig'

export default function Navbar({navigate,activePage}){ 

    return(
        <ul className="nav-list">
         {navlist.map(link=>
          <li className={link.page==activePage?"active":""} key={link.page} onClick={()=>{navigate(link.page)}}>{link.name}</li>
         )}
        </ul>
    )
}