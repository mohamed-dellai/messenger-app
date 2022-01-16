import React from 'react'
import {info} from './data.js'
import {info2} from './data2.js'
export function Left(props){
    if(props.onetwo==1){
    return(
        <div className='left'>
            <div className='head1'><img className='profile-img' src={info.photo} alt='image'></img>
             <p>{info.name}</p>
            </div>
            <div className='find'>
            <i className="fas fa-search"></i>
                <input type='text' placeholder='find'></input>
                
            </div>
            <div className='friends-list'>
                <div className='theFriend'> 
                    <img src={info2.photo} alt="image"></img>
                    <div className='friendText'><p>{info2.name}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
    }
    else if(props.onetwo==2){
        return(
            <div className='left'>
                <div className='head1'><img className='profile-img' src={info2.photo} alt='image'></img>
                 <p>{info2.name}</p>
                </div>
                <div className='find'>
                <i className="fas fa-search"></i>
                    <input type='text' placeholder='find'></input>
                    
                </div>
                <div className='friends-list'>
                    <div className='theFriend'> 
                        <img src={info.photo} alt="image"></img>
                        <div className='friendText'><p>{info.name}</p> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else return (<div></div>)
}

