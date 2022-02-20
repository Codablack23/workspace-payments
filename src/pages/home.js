import '../styles/home.scss'
import { useState,useContext } from 'react';
import Navbar from '../components/home/navbar'
import {AuthContext} from '../contexts/authContext'
const Home = () => {
    const { auth, dispatch } =useContext(AuthContext)
    const [page,setPage]=useState("Hero")
    const [s_email,setSEmail]=useState('')
    const [s_password,setSPassword]=useState('')
    const [s_confirm,setSConfirm]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSignUp=(e)=>{
        e.preventDefault()
        dispatch({type:"SIGNUP_USER",user:{email:s_email,password:s_password}})
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_USER",user:{email,password}})
    }
    return ( 
        <div className="Home">
        <Navbar navigate={setPage} activePage={page}/>
        {page=="Hero"?
        <div className="login">
              <form onSubmit={handleSignUp}>
                  <label  required={true}>Email</label><br/>
                  <input
                  required={true} 
                  type={"email"}
                  value={s_email}
                  onChange={(e)=>setSEmail(e.target.value)}
                  /><br/><br/>

                  <label>Password</label><br/>
                  <input 
                  required={true} 
                  minLength={8}
                  maxLength={20}
                  id="password"
                  value={s_password}
                  onChange={(e)=>setSPassword(e.target.value)}
                  type={"password"}
                  /><br/><br/>

                  <label >Confirm Password</label><br/>
                  <input 
                   required={true}
                   minLength={8} 
                   maxLength={20} 
                   type={"password"}
                   id="confirm_password"
                   value={s_confirm}
                   onChange={(e)=>setSConfirm(e.target.value)}
                   />
                   {s_password != s_confirm ?<p className="err">password does not match</p>:null}
                   <br/>
                   <br/>   
                  <button>Register</button>
              </form>
           </div>:
         (
           <div className="login">
              <form onSubmit={handleLogin}>
                  <label>Email</label><br/>
                  <input 
                  required={true}
                  type={"email"}
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  id="email"
                  /><br/><br/>

                  <label >Password</label><br/>
                  <input
                  required={true} 
                  minLength={8} 
                  maxLength={20} 
                  type={"password"}
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  /><br/><br/>

                  <button>Login</button>
              </form>
           </div>
         )
         }
        </div>
     );
}
 
export default Home;