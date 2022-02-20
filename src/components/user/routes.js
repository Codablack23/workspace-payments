import { useState, useContext } from 'react'
import { PaymentContext } from '../../contexts/paymentContext'
import { AuthContext } from '../../contexts/authContext'
import Report from './report'

const FilterComponent=()=>{
    return(
        <div className='order-by'>
           <div>
               <input type={'date'} placeholder="Add Date"/>
           </div>
          <div>
              <label>Filter By:</label>
              <select>
                  <option>Month</option>
                  <option>Day</option>
                  <option>Year</option>
              </select>
          </div>
       </div>
       )
}
export const Reports=()=>{
    const {payments} =useContext(PaymentContext)

    return(
        <div className="recieved tabs">
            <h1 className="center">Reports</h1>
            { payments.all_reports.length >0 ?  
           <div>
           <FilterComponent/>
           <br/><br/>
            <ul className="report-container">
             {payments.all_reports.map(report=><Report report={report}/>)}
           </ul> 
           </div>:
             <h2 className="center">You Do not Have Any Reports Yet</h2>
            }
        </div>
    )
}
export const Sent=()=>{
    const {auth} =useContext(AuthContext)
    const {payments} =useContext(PaymentContext)

    return(
        <div className="recieved tabs">
           <h1 className="center">Sent</h1>
           { payments.sent_reports.length>0 ?  
           <div>
           <FilterComponent/>
            <br/><br/>
           <ul className="report-container">
             {payments.sent_reports.map(report=><Report report={report}/>)}
           </ul> 
           </div>:
           <h2 className="center">You Have Not Sent Any Reports Yet</h2>
           }
        </div>
       )
}
export const Send=({navigate})=>{
    const date = new Date().toISOString()
    const {auth} =useContext(AuthContext)
    const {payments,dispatch} =useContext(PaymentContext)
    const [details,setDetails] = useState({
        date:date.substring(0, date.indexOf('T')),
        interval:'daily',
        sender:auth.user,
        reciever:''
    })

    const handleInputs=(e)=>{
       setDetails(current=>{
           let new_details = {...current}
           new_details[e.target.id] = e.target.value
           return new_details
       })
       console.log(details)
    }
    const handleSignUp=(e)=>{
     e.preventDefault()
     const start_date = new Date(details.date)
     function getEndDate(){
         let ending = new Date(details.date)
         switch (details.interval) {
            case 'daily':
                ending.setDate(ending.getDate() + 1)
                break
            case 'monthly':
                ending.setMonth(ending.getMonth() + 1)
                break
            case 'yearly':
               ending.setFullYear(ending.getFullYear() + 1)
               break
            default:
                 break;
         }
         return ending
     }
     const end_date = getEndDate();
     console.log(start_date)
     console.log(end_date)
     const sent_reports = payments.all_reports.map(report=>{
         const start = new Date(report.date)
         if ( start >= start_date && start <= end_date){
             return {...report,
                sender:details.sender,
                reciever:details.reciever
            }
         }
     })
     console.log(sent_reports)
     dispatch({type:'SEND_REPORT',payment:[...sent_reports]})
     navigate('Sent')

    }
    return(
        <div className="add tabs">
        <h1 className="center">Send Report</h1>
        <form onSubmit={handleSignUp}>
            <label>Reciever Mail</label><br/>
            <input 
            value={details.reciever}
            onChange={handleInputs}
            required
            id="reciever"
            type={"email"}/><br/><br/>

            <label >Interval</label><br/>
            <select
            value={details.interval}
            id="interval"
            onChange={handleInputs}
            required
            >
                <option value={''}> </option>
                <option value={'daily'}>Daily</option>
                <option value={'monthly'}>Monthly</option>
                <option value={'yearly'}>Yearly</option>
            </select>
            <br/><br/>

            <label >Date</label><br/>
            <input  
            value={details.date}
            onChange={handleInputs}
            id="date"
            required
            type={"date"} /><br/><br/>

            <button>Send</button>
        </form>
     </div>
     )
}

export const Recieved=()=>{
    const {auth} =useContext(AuthContext)
    const {payments} =useContext(PaymentContext)
    const GetRecievedReports =()=>{
    const recieved  =  payments.sent_reports.map(report=>{
         if(report.reciever == auth.user){
             return(<Report report={report}/>)
         }
    })
     return(recieved.length == 0?recieved:<h2 className="center">You Have Not Recieved  Any Reports Yet</h2>)
    }
    return(
        <div className="recieved tabs">
            <h1 className="center">Recieved</h1>
            { payments.sent_reports.length>0 ?  
             <div>
               <FilterComponent/>
               <br/><br/>
              <ul className="report-container">
                <GetRecievedReports/>
             </ul>
             </div> :
             <h2 className="center">You Have Not Recieved  Any Reports Yet</h2>
            }
        </div>
    )
}

export const Add=({navigate})=>{

    const {auth} =useContext(AuthContext)
    const {payments,dispatch} =useContext(PaymentContext)
    const [details,setDetails] = useState({
        id:(payments.all_reports.length == 0 ?1:payments.all_reports[payments.all_reports.length - 1].id + 1),
        name:'',
        amount:0,
        date:Date(),
        author:auth.user
    })

    const handleInputs=(e)=>{
       setDetails(current=>{
           let new_details = {...current}
           new_details[e.target.id] = e.target.value
           return new_details
       })
       console.log(details)
    }
    const handleSignUp=(e)=>{
     e.preventDefault()
     dispatch({type:'ADD_REPORT',payment:details})
     navigate('Reports')

    }
    return(
        <div className="add tabs">
          <h1 className="center">Add New Payment</h1>
          <form onSubmit={handleSignUp}>
              <label>Name</label><br/>
              <input 
              type={"text"}
              value = {details.name}
              id='name'
              onChange={handleInputs}
              required
              /><br/><br/>

              <label >Amount</label><br/>
              <input
               type={"number"}
               value = {details.amount}
               id='amount'
               onChange={handleInputs}
               required
               /><br/><br/>

              <label >Date</label><br/>
              <input  
               value = {details.date}
               id='date'
               onChange={handleInputs}
               required
               type={"date"} /><br/><br/>
              <button>Add Payment</button>
          </form>
       </div>
       ) 
      
}

export const Logout=()=>{
    const {dispatch} =useContext(AuthContext)
    return (
        <div>
            {dispatch({type:"LOGOUT_USER"})}
        </div>
    )
}