
import React, { Component } from 'react'
import pic from '../assets/newss.jpg'
import '../css/news.css'

export class newsItem extends Component {
  render() {
    let {title, description, imageUrl,url, author, date} = this.props;
    return (
    <div className="card text-light my-3 mx-1 px-2 py-2 itemm"  >
      <img className="card-img-top text-center img"  src={imageUrl?imageUrl:pic} alt="Card cap"/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,60)}...</h5>
        <p className="card-text" style={{color:"#8b8b8b"}} >{description?description.slice(0,115):"This is a news headline. to read the complete news click on the read more button"}...</p>
        <figcaption className="blockquote-footer mt-1"><small style={{color:"#c2b8da"}} > <em>By {!author ? "Unknown " : author} on {new Date(date).toGMTString()} </em> </small></figcaption>
        <a href={url} className="btn " target='_blank' rel='noreferrer' style={{maxWidth:"345px", backgroundColor:"#a688fa", color:"#282828"}} >Read more</a>
      </div>
    </div>
    )
  }
}


export default newsItem


      // <div className='my-4'>
      //   <div className="card py-2 px-2" style={{width: "18rem"}}>
      //     <img className="card-img-top" style={{height:"190px", width:"270px"}} src={imageUrl?imageUrl:image} alt="Card default cap"/>
      //     <div className="card-body">
      //       <h5 className="card-title">{title}...</h5>
      //       <p className="card-text">{description}...</p>
      //       <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
      //     </div>
      //   </div>
      // </div>