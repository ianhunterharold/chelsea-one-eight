import React from 'react';
import Navbar from './Navbar.js';
import LandingPage from './LandingPage.js';
import BlogPage from './BlogPage.js';
import About from './About.js';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <Router>
        <Navbar/>
       
          <Route path="/blogs" render={()=> <BlogPage/>}/>
          <Route path="/about" render={()=> <About/>}/>
          <Route path="/home" render={()=> <LandingPage/>}/>
        </Router>
        </div>
    </div>
  );
}

export default App;
