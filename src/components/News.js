import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import Pagination from './Pagination';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  articles=[]

  constructor(){
    super();
    this.state={
      articles: this.articles,
      spinner:false,
      page:0,
      totalResult:0
    }

  }

 componentDidMount() {
   let url0=`https://newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in`
    let url=this.props.CATG === "General"? `${url0}&page=${this.state.page}`:`https:newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in&category=${this.props.CATG}&page=${this.state.page}`
   this.setState({spinner:true})
   this.fetchingData(url)
}

fetchingData=(url)=>{
  fetch (url)
  .then((response) => response.json())
  .then(dataList => {
      this.setState({
        articles:dataList.results,
        page: dataList.nextPage,
        spinner:false ,
        totalResult:dataList.totalResults
      })

     
  });
}

//functionality of previous button click
// handlenextclick=()=> {
//   let url0=`https://newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in`
//     let url=this.props.CATG === "General"? `${url0}&page=${this.state.page}`:`https:newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in&category=${this.props.CATG}&page=${this.state.page}`
//   this.setState({spinner:true})
//   fetch (url)
//   .then((response) => response.json())
//   .then(dataList => {
//    this.setState({
//     articles:dataList.results,
//     page: dataList.nextPage,
//     spinner:false,
//     totalResult:dataList.totalResults
//   })
//   })
//   window.scrollTo(0,0);
//  }



// handlepreviousclick=()=> {
//   let url0=`https://newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in`
//     let url=this.props.CATG === "General"? `${url0}&page=${this.state.page-2}`:`https:newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in&category=${this.props.CATG}&page=${this.state.page-2}`
//   fetch (url)
//   .then((response) => response.json())
//   .then(dataList => {
//     this.setState({
//       articles:dataList.results,
//       page: dataList.nextPage,
//       spinner:false,
//       totalResult:dataList.totalResults
//     })
   
//   });
//   
// }
fetchMoreData=()=>{
  let url0=`https://newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in`
  let url=this.props.CATG === "General"? `${url0}&page=${this.state.page}`:`https:newsdata.io/api/1/news?apikey=${this.props.ApiKey}&country=in&category=${this.props.CATG}&page=${this.state.page}`
  this.setState({spinner:true})
fetch (url)
.then((response) => response.json())
.then(dataList => {
  this.setState({
    articles:this.state.articles.concat(dataList.results),
    page: dataList.nextPage,
    spinner:false,
    totalResult:dataList.totalResults
  })
  console.log(dataList);
});

}
hasempty=()=>{
  
  this.setState({
    spinner:false
  })
}
 
  render() { 

    const{ApiKey}=this.props.ApiKey
    console.log(ApiKey)
    return (
     
      <>
   {this.state.spinner&&<Spinner></Spinner>}
      <div className='container' style={{minHeight:"100vh"}}>    
        <InfiniteScroll style={{overflow:"hidden"}}
          dataLength={this.state.articles.length}
          next={this.state.page !== null ? this.fetchMoreData : this.hasempty}
          hasMore={this.articles.length!==this.state.totalResult}
          loader={this.state.page!==null?<Spinner></Spinner> : null}
          
        >
      <div className='row d-flex gap-5 justify-content-center align-item-center' >
      { 
       this.state.articles.map((element)=>{
       return <NewsItem imgURL={element.image_url===null ? null :element.image_url} description={element.description===null?element.title:element.description} title={element.title} articleURL={element.link} pubDate={element.pubDate} key={element.link} />
       })   
      }
     </div>
      </InfiniteScroll>
      </div>
     {/* <Pagination page={this.state.page} handlepreviousclick={this.handlepreviousclick} handlenextclick={this.handlenextclick} ></Pagination> */}
      </>
    )
  }
}

export default News
