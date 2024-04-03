import React, { Component } from 'react'
import NewsItem from './newsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // sabse pehle ye run hoga
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      category: props.category,
      totalResults : 0
    }
    document.title = `${this.Capitalize(this.state.category)} - NewsMate`;
  }

  // ye sabse last m run hoga 
  // upper wale functions ki jga ye bhi likhe ja skte h but hum concise krke likh rhe h
  async componentDidMount(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=96b0fe534f964a8a806e5f6d0eee256e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(60);
    console.log(this.state.articles)
    // console.log(parsedData);
    this.setState({
      articles:parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false 
    })
    this.props.setProgress(100);
  }



  fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=96b0fe534f964a8a806e5f6d0eee256e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page+1});
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    // console.log(this.state.articles.length )

    this.setState({
      articles:this.state.articles.concat(parsedData.articles), 
      totalResults:parsedData.totalResults,
      loading:false
    })
    console.log(this.state.articles)
  };


  // 2nd pe ye run hoga
  render() {
    // console.log("render")
    return (
      <div className='container my-3'>
        <h2 className='text-center mx-3 heading' >Latest {this.Capitalize(this.state.category)} - <span className='badge bg-danger'>News Headlines</span> </h2>

        {/* {this.state.articles.map((element)->{console.log(element)})} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          style={{ overflow: 'hidden'}}
          >
          
            
              <div className="row" >
                
              {!this.state.loading && this.state.articles.map((element)=>{
                
                return <div className="col-lg-4 col-sm-6" key={element.title}>
                  
                <NewsItem title={element.title?element.title.slice(0,60):""} source={element.source.name} author={element.author} date={element.publishedAt} description={element.description?element.description.slice(0,115):""} imageUrl={element.urlToImage} url={element.url}/>
              </div>
              })}
              </div>
            
          
        </InfiniteScroll>
        
      </div>
    )
  }
}
