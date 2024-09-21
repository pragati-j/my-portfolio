import React from "react";
import Name from "./Name";
import Navigation from "./Navigation";
import Bio from "./Bio";
import photo from "../pragati.jpg";

function Home(){
    return (
        <div>
        <Navigation />
        {/* <img src={photo} alt='My photo' id="my-photo"></img><br />  */}
        {/* <Name /> */}
        {/* <Bio /> */}
        <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social">
              <a
                href="https://www.linkedin.com/in/pragati-jhunjhunwala-b54149222/"
                target="_blank"
                class="home__social-icon"
              >
                <i class="uil uil-linkedin-alt home__icon"></i>
              </a>

              <a
                href="https://github.com/pragati-j"
                target="_blank"
                class="home__social-icon"
              >
                <i class="uil uil-github-alt home__icon"></i>
              </a>
            </div>
            <div class="home__img">
              <svg
                class="home__blob"
                viewBox="0 0 200 187"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                     -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image
                    class="home__blob-img"
                    x="-79"
                    y="-46"
                    href={photo}
                  />
                </g>
              </svg>
            </div>
            <div class="home__data">
              <h1 class="home__title">Hi, I'm Pragati Jhunjhunwala</h1>
              <h3 class="home__subtitle">
                Management Trainee at ICICI Bank
              </h3>
              <p class="home__description">
                I joined ICICI Bank in June 2024. I am a part of the 
                <strong> Interent Banking Team </strong> where I handle backend API call and UI of the platform.
              </p>
              <a href="#contact" class="button button--flex">
                Contact me<i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>

          <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="uil uil-mouse-alt home__scroll-mouse"></i>
              <span class="home__scroll-name">Scroll down</span>
              <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
        </div>
    )
}


export default Home;