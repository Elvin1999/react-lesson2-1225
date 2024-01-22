import React from 'react'

// const person={
//     name:"Elvin",
//     age:25,
//     theme:{
//         backgroundColor:"deepskyblue",
//         color:"white"
//     }
// };

// function GetFullInfo(){
//     return "Name : "+person.name+" Age : "+person.age;
// }

// export default function Item() {
//   return (
//     <div>
//       <h1 style={person.theme} >My name is {person.name}</h1>
//       <h2>I am {person.age} years old</h2>
//       <span>{GetFullInfo()}</span>
//     </div>
//   )
// }

import { Component } from 'react'

export default class Item extends Component {
name="Elvin";
age=10;
style={
    "color":"deepskyblue"
}

getFullInfo(){
    return this.name+" "+this.age;
}

  render() {
    return (
      <div>
        <h1 style={this.style}>My name is {this.name}</h1>
        <h2>I am {this.age} years old</h2>
        <span>{this.getFullInfo()}</span>
      </div>
    )
  }
}
