import "./nav.css"
import React, { Component } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import {NavLink,Link} from "react-router-dom";
export class Navbar extends Component {

  handleScrollUp=()=>{
    window.scrollTo(0,0)
  }

  render() {
    let { categories } = this.props
    return (
        <div className="sticky-top bg-light">
        <nav className="navbar navbar-expand-lg bg-light ">
          <div className="container-fluid">
          <li className="nav-item px-3">
            <Link onClick={this.handleScrollUp} className="navbar-brand text-light" to={"/"}><AiOutlineHome style={{ background: "#66739D", width: "30px", height: "30px", padding: "4px", borderRadius: "7px" }} /></Link>
        </li>
          <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{border: "1px solid #0c0b0b"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
       
            {
              categories.map((elem, ind) => {
                return  <li onClick={this.handleScrollUp} className="nav-item px-3" key={ind}><NavLink className="text-secondary" to={"/" + elem} key={ind}>{"#" + elem.charAt(0).toUpperCase() + elem.slice(1)}</NavLink></li>
              })
              
            }
           
            </ul>
            
            </div>
          </div>

        </nav>
      </div>
      
    
    )
  }
}

export default Navbar
