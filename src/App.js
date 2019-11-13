import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Blog from './components/blog';
import Projects from './components/projects';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Skills from './components/skills';
import Education from './components/education';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div class="container-wrap">
          <SideBar></SideBar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Timeline></Timeline>
            <Contact></Contact>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
