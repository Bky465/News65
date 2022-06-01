import React, { Component } from 'react'
import "./spinner.css"
export class spinner extends Component {
  render() {
    return (
<div className='d-flex justify-content-center '>
<div className="three-body">
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
</div>
</div>
    )
  }
}

export default spinner
