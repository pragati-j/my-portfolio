import React from "react";
import photo from '../pragati.jpg'
import CV from "../CV.pdf"
function Bio() {
    return (
        <section class="about section" id="about">
        <h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My introduction</span>

        <div class="about__container container grid">
          <img src={photo} alt="" class="about__img" />

          <div class="about__data">
            <p class="about__description">
            I’m a Product Manager at ICICI Bank, passionate about building scalable, user-focused digital products that connect technology with real business impact. At ICICI, I’ve led key initiatives like revamping the Net Banking Payment Gateway and implementing Adobe Analytics and Offer Decisioning, improving real-time personalization, payment reliability, and customer engagement for millions of users.  
            </p>

            <div class="about__info">
              <div>
                <span class="about__info-title">08.64+</span>
                <span class="about__info-name">Aggregate <br />CGPA</span>
              </div>

              <div>
                <span class="about__info-title">03+</span>
                <span class="about__info-name"
                  >
                  Projects</span
                >
              </div>

              <div>
                <span class="about__info-title">03+</span>
                <span class="about__info-name">Months <br />experience</span>
              </div>
            </div>

            <div class="about__buttons">
              <a download="" href={CV} class="button button--flex">
                Download CV<i class="fas fa-download button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
   )
}

export default Bio;
