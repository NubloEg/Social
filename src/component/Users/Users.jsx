
import React from  "react";
import style from "./Users.module.css";
import user_photo from "../../img/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


const Users=(props)=>{
        debugger
        let pagesCount=Math.ceil(props.totalUserCount/props.pageSize)  ;

        let pages=[];
        for (let i = 1; i <=pagesCount; i++) {
            pages.push(i);

        }


        return ( 
            
        <div className={style.fol}>
            <div className={style.str}> 
               {
                pages.map(p=>{
                    return <span key={p} className={props.currentPage===p ? style.numberPageActive:style.numberPage} onClick={()=>props.onChangePages(p)} >{p}</span>
                })
               } 
            
            </div>
            
        
        {
            props.users.map(u=><div className={style.item}  key={u.id}>
                <span >
                    <div>
                        <NavLink to={'./../profile/' + u.id}>
                        <img src={u.photos.small!=null?u.photos.small:user_photo} alt="аватарка" className={style.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed?
                            <button
                                onClick={()=>{
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true,
                                    headers:{
                                        "API-KEY":"33b3b31a-0a28-492b-b5cc-56460d5c34d0"
                                    }}).then(respons=>{

                                        if (respons.data.resultCode===0){
                                            props.unfollow(u.id)
                                        }
                                    })






                                }}>
                                unfollow
                            </button>:<button
                                onClick={()=>{
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true,
                                        headers:{
                                            "API-KEY":"33b3b31a-0a28-492b-b5cc-56460d5c34d0"
                                        }}).then(respons=>{

                                        if (respons.data.resultCode===0){
                                            props.follow(u.id)
                                        }
                                    })






                                }}>
                                follow</button>}
                        
                    </div>
                </span>
                <span className={style.span}>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>

                    </span>
                    <span>
                        
                        <div>{/* u.location.country */}</div>
                        <div>{/* u.location.city */}</div>
                    </span>
                </span>
            </div>)
        }
            
        </div>
        )
    

}




export default Users