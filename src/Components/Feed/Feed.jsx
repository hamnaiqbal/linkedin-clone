import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import "./feed.css";
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import Posts from '../Post/Posts';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import {selectUser} from '../../features/userSlice';
import {useSelector} from "react-redux";

function Feed() {

  const [input,setInput]=useState("");
  const [posts,setposts]= useState([]);
  const user=useSelector(selectUser)
  

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>
      setposts(snapshot.docs.map((doc)=>({
        id:doc.id,
        data:doc.data(),
      }))
      )
    );

  },[]);
  const sendPost=(e)=>{
    e.preventDefault();
    db.collection("posts").add({
      name:user.displayName,
      description:user.email,
      message: input,
     
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      

    });
    setInput("")
  }
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>

        </div>
        <div className="feed_inputOptions">
        <InputOptions Icon={ImageIcon} title="Photo" color="#B4161B" />
        <InputOptions Icon={OndemandVideoIcon} title="Video" color="#3DBE29" />
        <InputOptions Icon={EventNoteIcon} title="Event" color="#5A20CB" />
        <InputOptions Icon={ArticleIcon} title="Write Article" color="#F7CD2E"/>
          
          
          </div>

      </div>

      {posts.map(({id,data:{name,description,message}})=>

      
        
        <Posts
        key={id}
        name={name}
        description={description}
        message={message}
        

        />
        )}
      {/* <Posts name='Hamna Iqbal Khan' description="Front End Developer at Nastech" message="I hope you are good"/> */}





    </div>
  )
}

export default Feed
