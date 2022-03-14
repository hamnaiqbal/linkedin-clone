import React, { useEffect } from 'react';


import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import {useDispatch, useSelector} from "react-redux";
import {selectUser,login,logout} from './features/userSlice';
import { auth } from './Components/Feed/firebase';
import Widgets from './Components/Widgets/Widgets';



function App() {
  
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{

      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoUrl,
        })
        );
      } else{
        dispatch(logout());
      }

    });
    
  },[]);
  return (
    
    <div className="App">
      
     {/* Header */}
    <Header/>

      {/* WHOLE BODY */}
      {!user ? 
      <Login/>
       :(
        <div className='app_body'>
        <Sidebar/>

        
         {/* News Feed */}

         <Feed/>
         {/* Widgets */}
         <Widgets/>


        </div>

      )}
            
           
           
     
    </div>
  );
}

export default App;
