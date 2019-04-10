import React , { useState, useEffect } from 'react';
import delet from '../picture/delete.png';
import axios from 'axios';

export default function Data(props){
    const horario = props.created_at;
    var times=horario.split("T")[1].split(".");
    var days=horario.split("T")[0].split("-").reverse();
    var today = new Date().getDate();
    times.pop();
    var time = times.toString().split(":");
    const [paint, setPaint] = useState(false);
     const sms = () => {
     let del =   window.confirm("Esta seguro de eliminar el producto?")
      if(del){
        fetch('/:'+props.id, {
            method:'DELETE',
            body:JSON.stringify(props),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .catch(err=>console.log(err))    
      }
    }
    const divStyle = {background: '#fafafa'}    
    var title=null;
    if(props.story_title)
    {
        title=props.story_title
    }
    else if(props.title){
        title=props.title;
    }
    if(title){
        return(
            <>        
            <a >
                <div className="Container"
                 onMouseOver={() => setPaint(true)}
                  onMouseOut={()=>setPaint(false)} 
                   style={paint ? divStyle : null}>
                    <div className="div1"> {title} <label className="author">-{props.author}-</label></div>
                    <div className="div2">{
                        Number(days[0])==today-1
                        ? "Yesterday"
                        :  Number(days[0])<today-1
                        ?  Month(Number(days[1]))+" "+  days[0]
                        : time[0]>12
                        ? time.join(":")+"PM"  
                        : time.join(":")+"AM"
                         
                        }</div>
                    <div  className="div2" >                
                    <img  src={paint ? delet : null} onClick={sms}/>
                    </div> 
                </div>
            </a>      
            </>
        )
    }
}
function Month(month){
   var arr = ["January","February", "March", "April", "May", "June", "July", "August",
                            "September","October","November","December"]
return arr[month];
}
