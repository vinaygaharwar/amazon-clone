import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Checkout from './checkout/Checkout';
import { useStateValue } from './contextApi/StateProvider';
import Header from './header/Header';
import Home from './home/Home';
import Login from './login/Login';
import { auth } from './firebase'
function App() {
  const[{user},dispatch]=useStateValue()

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          type:"SET_USER",
          user:authuser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return ()=>{
      unsubscribe()
    }
  },[])
  console.log("user is>>",user)
  return (
    <Router>
    <div className='app'>
      <Routes>
        <Route path='/checkout' element={<div><Header/><Checkout/></div>}/>
        <Route path='/Login' element={<><Login/></>}/>
        <Route path='/' element={<><Header/> <Home/></>}/>
         
      </Routes>
    </div>
    </Router>
  )
}

export default App
