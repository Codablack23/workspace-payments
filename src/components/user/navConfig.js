 import
 {
    Reports,
    Sent,
    Recieved,
    Add,
    Send,
    Logout
} 
from './routes'
 
 export const navlist = [
        {page:"Reports",name:"Reports",Comp:Reports,route:'/reports'},
        {page:"Sent",name:"Sent",Comp:Sent,route:'/sent'},
        {page:"Recieved",name:"Recieved",Comp:Recieved,route:'/recieved'},
        {page:"Send Report",name:"Send Report",Comp:Send,route:'/send_reports'},
        {page:"Add",name:"Add Payment",Comp:Add,route:'/add_payment'},
        {page:"Logout",name:"Logout",Comp:Logout,route:'/add_payment'},
    ]