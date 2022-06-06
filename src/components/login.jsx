import {info} from './data.js'
import {info2} from './data2.js'
import {useState} from 'react'
export function Login1(props){
const [userName, setuserName] = useState('')
const [password, setPassword] = useState('')
const [visibleWelcome, setWelcome] = useState(false)
const [visibleWrong, setWrong] = useState(false)

console.log(info)
console.log(info2)



function testing(){
    
    if(userName==info.name && password==info.pass){
      setWelcome(()=>true)
      setWrong(()=>false)
      setTimeout(()=>{props.setOneOrTwo(1)},1500)
        
    }
    else if
     (userName==info2.name && password==info2.pass){
      setWelcome(()=>true)
      setWrong(()=>false)
      setTimeout(()=>{props.setOneOrTwo(2)},1500)
        
     }
     else{
      setWrong(()=>true)
     }
}
const wrong=<div style={{color: 'red', margin: 'auto' , width: '50px', paddingBottom: '10px'}}><i class="fas fa-hand-paper"></i> <p>Stop!</p></div>
const welcome=<div style={{color: 'green', margin: 'auto' , width: '50px', paddingBottom: '10px'}}><i class="fas fa-thumbs-up"></i> <p style={{marginLeft:'-15px'}}>Welcome!</p></div>
    return(
      <div className='login'>
          <div className="log">
    <h2>Welcome Back</h2>
    <form>
      <div className="input-cont">
        <input type="text" value={userName} onChange={(r)=>setuserName(r.target.value)}/>        
        <label>Username</label>
        <div className="border1"></div>
      </div>
      <div className="input-cont">
        <input type="password" value={password} onChange={(r)=>setPassword(r.target.value)}/>
        <label>Password</label>
        <div className="border2"></div>
      </div>
       {visibleWrong ? wrong : ''}
       {visibleWelcome ? welcome : ''}
      <span className="check">
        
      </span>
      <a href="#">Forgot Password</a>
      <div className="clear"></div>
      <input type="button" value="Sign In" onClick={testing}/>  
    </form>
</div>
      </div>
        
    )
}
