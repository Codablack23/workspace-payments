import { useState } from "react"

export default function Navbar({navigate,activePage}){
    const nav=[
        {page:"Hero",name:"Home"},
        {page:"Login",name:"Login"},
    ]
   

    return(
        <ul className="nav-list">
         {nav.map(link=>
          <li className={link.page==activePage?"active":""} key={link.page} onClick={()=>{navigate(link.page)}}>{link.name}</li>
         )}
        </ul>
    )
}