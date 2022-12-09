import React from 'react';


function Techno(props){
  return (
    <div className="mi-service">
        <img src={props.content.img} alt={props.content.title}/>
    </div>
  )
}

export default Techno;
