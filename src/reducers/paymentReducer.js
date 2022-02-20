export const  paymentReducer=(state,action)=>{
    let new_state = {...state}
   switch (action.type) {
       case 'SEND_REPORT':
           if (state.sent_reports !== action.payment ){
            new_state.sent_reports = [...state.sent_reports,...action.payment]
           }          
           return new_state
        case 'ADD_REPORT':  
            new_state.all_reports = [...state.all_reports,action.payment]
            return new_state
        case 'REMOVE_REPORT':  
        console.log(new_state)
        new_state.all_reports =state.all_reports.filter(report=>report == action.id)
        return new_state
       default:
           return new_state
       
   }
}