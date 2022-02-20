import './App.scss'
import AuthContextProvider from './contexts/authContext'
import CheckUser from './components/home/checkUser'



export default function App() {
 
  return (
    <div className="App">
     <AuthContextProvider>
         <CheckUser/>
     </AuthContextProvider>
    </div>
  );
}
;

