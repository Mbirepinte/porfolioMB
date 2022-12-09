import React from 'react';


function Techno(props){
  
   const imgStyle = {
    width: "15vh",
    height: "auto",
    alignItems: "center",
   } 


  return (
    
    <div className="mi-service" >
        <h5 style={{textAlign:'center'}}>{props.content.title}</h5>
      <div style={{textAlign:'center'}}>
        <center><img  style={imgStyle} src={props.content.img} alt={props.content.title}/></center>
      </div>

    </div>
  )
}

export default Techno;
