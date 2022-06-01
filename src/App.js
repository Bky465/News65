import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Error from './components/Error';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  ApiKey= process.env.REACT_APP_NEWS_API_KEY
  categories = ["business", "entertainment", "environment", "food", "health", "politics", "science", "sports", "technology", "top", "world"]
  render() {
    return (
      <div>
        <Router>
       
          <Navbar  categories={this.categories}></Navbar>
          <Routes >
            <Route  path="/" element={<News CATG={"General"} ApiKey={this.ApiKey}  key={"General"}></News>}></Route>
            {
              this.categories.map((elem) => {
                return <Route  path={"/" + elem} element={<News CATG={elem} ApiKey={this.ApiKey} key={elem}></News>} key={elem}></Route>

              })
            }
            <Route path='*' element={<Error></Error>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

