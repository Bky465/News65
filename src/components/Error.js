import React, { Component } from 'react'
import "./error.css"
export class Error extends Component {
  render() {
    return (
      <div className='error-page'>
            <h1>404</h1>
            <p>NOT FOUND!!!</p>
      </div> 
    )
  }
}

export default Error
