import React, { Component } from 'react'

export class Claass extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='class component'>
          <h1>This is created using Class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:'red', fontWeight: 'bold'}}>This is done using inline CSS</p>
      </div>
    )
  }
}

export default Claass;