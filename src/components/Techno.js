import React from 'react';


function Techno(props){
  
   const imgStyle = {
    width: "15vh",
    height: "auto",
   } 


  return (
    
    <div className="mi-service">
        <h5 style={{textAlign:"center"}} >{props.content.title}</h5>
 
        <img style={imgStyle} src={props.content.img} alt={props.content.title}/>

    </div>
  )
}

export default Techno;
