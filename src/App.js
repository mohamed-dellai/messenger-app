import React from 'react'
import {Body} from './components/Body.jsx'
import {Left} from './components/Left.jsx'
import {Login1} from './components/login.jsx'
import {useState} from 'react'

   function App() {
     const [oneOrTwo,setOneOrTwo]=useState('');
     if(oneOrTwo===''){
      return (
      
      <div style={{display: 'flex'}}>
        <Login1 setOneOrTwo={setOneOrTwo}/>
        
      </div>
        );}
      else {
        return(
        <div style={{display: 'flex'}}>
        <Left onetwo={oneOrTwo}/>
        <Body onetwo={oneOrTwo} setOneOrTwo={setOneOrTwo}/>
      </div>
        );
      }
  }


export default App;
