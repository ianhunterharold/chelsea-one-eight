import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Navbar.css';



export default function Navbar() {

  const inLine = {
    margin: '10px',
    border: '5px solid black',
    
  }

  return(
    <div  style={inLine} className="navbar-heading" >
    <Link to="/">
    <div>
      Chelsea
    </div>

    </Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/about">About</Link>
    
    
    </div>
  )
  
}
  
 