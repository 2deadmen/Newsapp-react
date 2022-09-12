import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
   articles= [
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "IIT JEE Advanced 2022 Result Declared LIVE Updates: Score cards, final answer released; R K Shishir earns top rank - The Indian Express",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMioAFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvZWR1Y2F0aW9uL2lpdC1ib21iYXktamVlLWFkdmFuY2VkLTIwMjItcmVzdWx0LWxpdmUtdXBkYXRlcy1oZXJlcy1ob3ctdG8tY2hlY2stc2NvcmUtY2FyZC10b3BwZXJzLWxpc3QtYXQtamVlYWR2LWFjLWluLTgxMDU1Mjkv0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-09-11T06:36:50Z",
      "content": null
    }
   
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      Loading: false,
    };
  }
   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=5beeaf5b46fa43218177b1a7a1ec5891"
    let data= await fetch(url) 
    let jdata= await data.json()
    console.log(jdata.articles)
    this.setState({ articles : jdata.articles})
  }
  render() {
    return (
      <div className="container my-3 ">
          <div>
          <h2>News -Headlines</h2>
          <div className="row">
            {this.state.articles.map((element)=>{
            return <div key={element.url} className="col-md-4 my-3">
            <NewsItem
              title={element.title}
              description={element.description?element.description.slice(0,100):"..."}
              ImageUrl={element.urlToImage}
              Url={element.url}
            ></NewsItem></div>  
            })}
         </div>   
        </div>
      </div>
    );
  }
}

export default News;
