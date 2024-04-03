import React from 'react';
import { Link } from "react-router-dom";

const navbar = ({setcategory}) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><span className='badge fs-4' style={{backgroundColor:"#a688fa", color:"#121212"}}>NewsMate</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active"  to='/general' >General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/business' >Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/technology'>Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/science" >Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/entertainment" >Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/health" >Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/sports" >Sports</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar

