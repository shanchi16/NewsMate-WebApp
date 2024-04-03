import React from 'react'

const footer = () => {
  return (
    
   <div style={{backgroundColor: '#282828', color:'#ba9ffb'}}>

    <div className="container">
    <footer className="py-5">
        <div className="row">
        <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Home</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Features</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Pricing</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>FAQs</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>About</a></li>
            </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Home</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Features</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Pricing</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>FAQs</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>About</a></li>
            </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Home</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Features</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>Pricing</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>FAQs</a></li>
            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 " style={{color:"#8b8b8b"}}>About</a></li>
            </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
            <form>
            <h5>Subscribe to our newsletter</h5>
            <p style={{color:"#8b8b8b"}}>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn" style={{backgroundColor:"#ba9ffb"}} type="button">Subscribe</button>
            </div>
            </form>
        </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
        {/* <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use xlink:href="/twitter"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use xlink:href="/instagram"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use xlink:href="/facebook"/></svg></a></li>
        </ul> */}
        </div>
    </footer>
    </div>
   </div>
  )
}

export default footer
