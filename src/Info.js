import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div>
        <section>
            <h5>Surname {this.props.person.surname}</h5>
            <h5>He/She is {this.props.person.age} years old</h5>
        </section>
      </div>
    )
  }
}
