import React from 'react'

const avatar="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";
const name="Elvin";
const date=new Date(2020,0,12);

const subStyle={
    marginTop:"-10%",
    textAlign:"center",
    color:"white"
}

export default function Profile() {
  return (
    <div>
      <section
      style={{
        width:"250px",
        height:"250px",
        margin:"auto",
        border:"5px solid springgreen",
        marginTop:"100px",
        padding:"40px",
        boxSizing:"border-box",
        borderRadius:"40%",
        backgroundColor:'black'
      }}
      >
        <img src={avatar} 
           style={{
            width:"150px",
            height:"150px",
            margin:"auto",
            borderRadius:"50%"
        }} alt='profile'/>

        <h2 style={subStyle} className='special'>{name}</h2>
<h2 style={subStyle} >{date.getDate()}/{(date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1)}/{date.getFullYear()}</h2>
      </section>
    </div>
  )
}
