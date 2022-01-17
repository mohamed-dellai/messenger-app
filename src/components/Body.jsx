import React,{useState,useEffect} from 'react'
import {info} from './data.js'
import {info2} from './data2.js'
export function Body(props){
  if(localStorage.getItem("data")===null)
   localStorage.setItem("data",'[]')
  
  var data=JSON.parse(localStorage.getItem("data"))
  const [state, setstate] = useState('')
  const [searchword, setsearch] = useState('')
  const [data1, setdata] = useState(()=>data)
  const [visible, setVisible] = useState(false)
  function adding(){
    if(state!='')
    setdata([...data1 , {mess: state , who: 'me'}]);
    setstate('')
  }
  function adding2(){
    if(state!='')
    setdata([...data1 , {mess: state , who: 'his'}]);
    setstate('')
  }

  useEffect(() => {
      var element = document.getElementById("scroll");
      element.scrollTop = element.scrollHeight;
      localStorage.setItem("data",JSON.stringify([...data1]))
  }, [data1])

  const handleUserKeyPress = event => {
    

    if (event.key === 'Enter') {
      document.getElementById('button').click();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleUserKeyPress);

    return () => {
      window.removeEventListener('keypress', handleUserKeyPress);
    };
  });
   
  function filter(e){

  
    
    var parent=document.getElementById("scroll");
    var childrens=parent.getElementsByTagName("p");
    console.log(childrens)
    for(let i=0;i<childrens.length;i++){
      if(childrens[i].innerText.indexOf(e.target.value)===-1)
        childrens[i].style.display="none";
      else
      childrens[i].style.display="";
    }
  
    setsearch(e.target.value);
  }

  function cancelLoad(){
    var elem=document.getElementById('loader');
    console.log(elem);
    elem.style.opacity="0";
  }
  
  const search=<div className='search-in'>  <input placeholder='enter' value={searchword} onChange={filter}/> </div>
  if(props.onetwo==1){ 
    return(
        <div className='main-body' onLoad={cancelLoad}>
          <div className='head'>
            <div className='first'>
              <img src={info2.photo}></img>
              <p>{info2.name}</p>
              </div>
              <div className='second relative'>
              <i onClick={()=>setVisible(!visible)} className="fas fa-search"></i>
              {visible ? search : ''}
              <i class="fas fa-sign-out-alt" onClick={()=>props.setOneOrTwo('')}></i>
            </div>
          </div>
          <section className='message-section' id='scroll'>
            
            {data1.map((user,i)=>{
                if(user.who==='me'){
                    return(
                        <p key={i} className='me'>{user.mess}</p>
                    )
                }
                else if(user.who==='his'){
                    return (
                        <p key={i} className='his'>{user.mess}</p>
                    )
                }
            })}

          </section>
          <div className='typing'>
                <i class="far fa-smile"></i>
                <i class="fab fa-airbnb"></i>
                  <input type='text' placeholder='Taper un message' value={state} onChange={(e)=>setstate(e.target.value)}></input>
                <i class="fas fa-paper-plane" id='button' onClick={adding}></i>
              </div>
        </div>
    )}
    else if(props.onetwo==2){
      return(
        <div className='main-body' onLoad={cancelLoad}>
          <div className='head'>
            <div className='first'>
              <img src={info.photo}></img>
              <p>{info.name}</p>
              </div>
              <div className='second relative'>
              <i onClick={()=>setVisible(!visible)} className="fas fa-search"></i>
              {visible ? search : ''}
              <i class="fas fa-sign-out-alt" onClick={()=>props.setOneOrTwo('')}></i>
              
            </div>
          </div>
          <section className='message-section' id='scroll'>
            
            {data1.map((user , i)=>{
                if(user.who==='me'){
                    return(
                        <p key={i} className='his'>{user.mess}</p>
                    )
                }
                else if(user.who==='his'){
                    return (
                        <p key={i} className='me'>{user.mess}</p>
                    )
                }
            })}

          </section>
          <div className='typing'>
                <i class="far fa-smile"></i>
                <i class="fab fa-airbnb"></i>
                <input type='text' placeholder='Taper un message' value={state} onChange={(e)=>setstate(e.target.value)}></input>
                <i class="fas fa-paper-plane" id='button' onClick={adding2}></i>
              </div>
        </div>)
    }
    else return (<div></div>)
}
