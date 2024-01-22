import React from 'react'

const age=100;
let name="Elvin";

export default function Todo() {
  return (
    <div>
      <ul style={{
        backgroundColor:"springgreen",
        padding:"20px",
        border:"2px solid deeppink",
        width:"50%",
        margin:"auto",
        marginTop:"100px"
      }}>
        <li>Your name is {name}</li>
        <li>Your age is {age}</li>
        <li>Write Code</li>
        <li>Read Book</li>
        <li>Play Court Tennis</li>
      </ul>
    </div>
  )
}
