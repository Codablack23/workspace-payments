
const users=[
    {id:1,email:"goodluck@gmail.com",password:"goodypassword"},
    {id:2,email:"test@gmail.com",password:"testpassword"},
    {id:3,email:"fire@gmail.com",password:"firepassword"},
]
const loginUser=(all_users,current_user)=>(
    all_users.find(user=>(user.email === current_user.email && user.password === current_user.password))
)

export const  authReducer=(state,action)=>{
     let new_state={}
    switch (action.type) {
        case "LOGOUT_USER":
           
             new_state.isLoggedIn = false
             new_state.user=null
             new_state.message = "You Have Successfully Logged Out"
             return new_state
        case "LOGIN_USER":
            if (loginUser(users,action.user) != undefined){
                new_state.isLoggedIn = true
                new_state.user=action.user.email
                new_state.message = ""
            }else{
                new_state.isLoggedIn = false
                new_state.user=null
                new_state.message = "Inavlid Login Credentials"
            }
            return new_state
        case "SIGNUP_USER":
            console.log(state)
            let isExist = users.find(user=>user.email == action.user.email)
            console.log(action.user)
            console.log(isExist)
            if (!isExist) {
                users.push({...action.user,id:users[(users.length - 1)].id + 1})
                new_state.isLoggedIn = true
                new_state.user = action.user.email
                new_state.message = "You Have Successfully Signed Up"
            }
            else{
                new_state.isLoggedIn = false
                new_state.user = null
                new_state.message = "User With That Email already Exist"
            }
            return new_state 
        default:
            return state
        
    }
}