import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../style/navbar.css';



export default function Navbar() {

  const inLine = {
    margin: '10px',
    border: '5px solid black',
    
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
  
 