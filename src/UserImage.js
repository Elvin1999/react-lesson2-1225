import React, { Component } from 'react'

// export default class UserImage extends Component {
//   render() {
//     return (
//       <div style={{
//         border:"2px solid black",
//         padding:"20px",
//         width:"50%",
//         marginTop:"50px"
//       }}>
//         <h1>User Info</h1>
//         <h3><b>{this.props.name}</b></h3>
//         <img style={{width:'30%'}} src={this.props.avatar} alt='actor'></img>
//       </div>
//     )
//   }
// }


// export default function UserImage({name,avatar}) {
//   return (
//     <div style={{
//                 border:"2px solid black",
//                 padding:"20px",
//                 width:"50%",
//                 marginTop:"50px"
//               }}>
//                 <h1>User Info</h1>
//                 <h3><b>{name}</b></h3>
//                 <img style={{width:'30%'}} src={avatar} alt='actor'></img>
//               </div>
//   )
// }

export default function UserImage(props) {
    return (
      <div style={{
                  border:"2px solid black",
                  padding:"20px",
                  width:"50%",
                  marginTop:"50px"
                }}>
                  <h1>User Info</h1>
                  <h3><b>{props.name}</b></h3>
                  <img style={{width:'30%'}} src={props.avatar} alt='actor'></img>
                </div>
    )
  }
  