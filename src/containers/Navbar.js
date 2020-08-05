import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar() {
  return(
    <>
    <Link to="/">
    <div>
      Chelsea
    </div>
    </Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/about">About</Link>
    
    
    </>
  )
  
}
  
 