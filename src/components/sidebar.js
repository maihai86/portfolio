import React, { Component } from 'react'
import { FACEBOOK_URL, LINKEDIN_URL, GITHUB_URL, MEDIUM_URL } from '../constants'

class SideBar extends Component {
    render() {
        return (
          <div>
            <div>
              <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
              <aside id="colorlib-aside" className="border js-fullheight">
                <div className="text-center">
                  <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                  <h1 id="colorlib-logo"><a href="/#">Mai Tiến Hải</a></h1>
                  <span className="email"><i className="icon-mail"></i><a href="mailto:maihai86@gmail.com">maihai86@gmail.com</a></span>
                  <span className="position"><a href="/#">Software Engineer/Technical Leader</a></span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                  <div id="navbar" className="collapse">
                    <ul>
                      <li className="active"><a href="#home" data-nav-section="home">Who Am I?</a></li>
                      <li><a href="#about" data-nav-section="about">Giới thiệu</a></li>
                      {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                      <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                      <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                      <li><a href="#education" data-nav-section="education">Học vấn</a></li>
                      <li><a href="#timeline" data-nav-section="timeline">Quá trình công tác</a></li>
                      <li><a href="#contact" data-nav-section="contact">Liên hệ</a></li>
                    </ul>
                  </div>
                </nav>
                <nav id="colorlib-main-menu">
                  <ul>
                    <li><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                    <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                    <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                    <li><a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
                  </ul>
                </nav>
                <div className="colorlib-footer">
                  <p><small>
                      Điều giá trị duy nhất còn lại là sản phẩm tốt <i className="icon-heart" aria-hidden="true" style={{color: 'red'}}/>
                  </small></p>
                </div>
              </aside>
            </div>
          </div>
        )
      }
}
export default SideBar