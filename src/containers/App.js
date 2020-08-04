import React from 'react';
import Navbar from './Navbar.js';
import BlogPage from './BlogPage.js';


function App() {
  return (
    <div>
      <header>
        <Navbar/>

      </header>
      <BlogPage/>
      <p>
        I am in the App below blog page 
        featuring a blog post 
        
      </p>
    </div>
  );
}

export default App;
