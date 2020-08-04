import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router";


import BlogPosts from './BlogPage.js';
import LandingPage from './LandingPage.js';
import About from './About.js';

export default function Navbar() {
  return(
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogPost">Blog Posts</Link>
          </li>
        </ul>

        <hr />

      
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogposts">
            <BlogPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

