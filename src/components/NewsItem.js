import React, { Component } from 'react'
import "./NewsItem.css"
export class NewsItem extends Component {
  constructor(){
    super();
    this.state={
      DES:null
    }
  }
 componentDidMount(){
  const splitArr = this.props.description.split(".");
  // console.log(splitArr[0]);
   this.setState({
    DES: splitArr[0]
   })
 }
 
  render() {
    let {imgURL,title,articleURL,pubDate}=this.props

    return (
      <>
<div className="card mb-3  "  style={{maxWidth:"800px",border:"none"}}>
  <div className="row g-0">
    <div className="col-md-4" >
      <img src={imgURL===null ? "QN.jpg" : imgURL} alt="" className="img-fluid"  style={{height:"100%",width:"100%"}}/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{this.state.DES+"."}</p>
        <div className="d-flex justify-content-between" style={{width:"100%"}}>
        <a href={articleURL} rel="noreferrer noopener" target="_blank" className="learn-more" >
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span  className="button-text text-secondary">Learn More</span>
</a>
<p className='publish_date my-auto'>{pubDate}</p>
</div>
      </div>
    </div>
  </div>
</div>
</>
    )
  } 
}
export default NewsItem
 