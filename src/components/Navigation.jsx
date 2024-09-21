import React, { Fragment } from "react";
import { Router, Link } from "react-router-dom";
import  "../App.css"
function Navigation(){
    var linkToCV="https://drive.google.com/file/d/15bR2flENotiuWEyvJ_GuwSa2hpE3GI5x/view?usp=sharing";
    function changeTheme(event){
      var id= event.target.id;
      console.log(id);
      const ele= document.getElementById(id);
      const body= document.getElementsByTagName('body')
      console.log(body)
      body[0].classList.toggle("dark-theme")
      ele.classList.toggle("uil-sun")
    }
    return(
        // <div className="navigation-bar">
        //     <span><Link to="/" style={{color: "white", textDecoration:"None"}}>Home</Link></span>
        //     <span><Link to="/Experience" style={{color: "white", textDecoration:"None"}}>Experience</Link></span>
        //     <span><a href={linkToCV} target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration:"None"}}>Resume</a></span>
        //     <span><Link to="projects" style={{color: "white", textDecoration:"None"}}>Projects</Link></span>
        //     <span><Link to="/Education" style={{color: "white", textDecoration:"None"}}>Education</Link></span>
        //     <span><Link to="/skills" style={{color: "white", textDecoration:"None"}}>Skills</Link></span>
        // </div>
        <nav class="nav container">
        <a href="#" class="nav__logo">Pragati</a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                <i class="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li class="nav__item">
              <a href="#skills" class="nav__link">
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li class="nav__item">
              <a href="#qualification" class="nav__link">
                <i class="uil uil-briefcase-alt nav__icon"></i>Qualification
              </a>
            </li>
            <li class="nav__item">
              <a href="#portfolio" class="nav__link">
                <i class="uil uil-scenery nav__icon"></i>Projects
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="uil uil-message nav__icon"></i>Contact-Me
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" id="nav-close"></i>
        </div>
        <div class="nav__btns">
          <i class="uil uil-moon change-theme" id="theme-button" onClick={changeTheme}></i>

          <div class="nav__toggle" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    )
}

export default Navigation;