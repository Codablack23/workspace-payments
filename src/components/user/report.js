import { useContext } from 'react'
import { PaymentContext } from '../../contexts/paymentContext'

export default function Report({report,sender,reciever}){
    const  { dispatch } =useContext(PaymentContext)
    const handleDelete=(id)=>{
        dispatch({type:'REMOVE_REPORT',id})
    }
    console.log(report)
    return(
        <li key={report.id} className="report">
            <h3 className="title">{report.name}</h3>
            <span className="delete" onClick={()=>handleDelete(report.id)}><i className="bi bi-trash"></i></span>
            <div className="info">
              <p>N{report.amount}</p>
              <span>{report.date}</span>
            </div>
        </li>
    )
}
