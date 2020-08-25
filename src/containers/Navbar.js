import React from 'react';
import {Link} from 'react-router-dom';




export default function Navbar() {

  const inLine = {
    margin: '10px',
    border: '5px solid black',
    
  }

  const inLineBlog = {
    margin: '50px',
    border: '5px solid green',
    
  }

  // className={styles.navbar}
  return(
    <div  style={inLine} >
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
  
 