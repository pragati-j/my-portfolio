import React from "react";
import award from "../award-fill.svg"
import book from "../book-fill.svg"
import play from "../envelope-open-fill.svg"
import Navigation from "./Navigation";

function Education() {
  return (
    // <div>

    // <Navigation />
    // <div className="container">
    //     <div className="text-content">
    //         <h2 style={{color: "white", fontSize:"30px"}}>Indian Institute of Technology, Kharagpur</h2>
    //         <div className="vertical-line"></div>
    //         <p><img src={award} alt="Svg" style={{height: "20px", width:"20px"}}/>  8.64/10</p>
    //         <p><img src={book} alt="Svg" style={{height: "20px", width:"20px", paddingTop:"10px" }}/> Bachelor's in Technology</p>
    //         <p><img src={play} alt="Svg" style={{height: "20px", width:"20px", paddingTop:"10px" }}/> I did my major in Biotechnology. Beyond my coursework, I invested time in exploring different domains of technology and discovered my passion for Development and Programming.</p>
    //     </div>
    // </div>


    // <div className="container">
    //     <div className="text-content">
    //         <h2 style={{color: "white", fontSize:"30px"}}>Maheshwari Girls' School, ISC</h2>
    //         <div className="vertical-line"></div>
    //         <p><img src={award} alt="Svg" style={{height: "20px", width:"20px"}}/>  93.5%</p>
    //         <p><img src={book} alt="Svg" style={{height: "20px", width:"20px", paddingTop:"10px" }}/> Higher Secondary Education</p>
    //         <p><img src={play} alt="Svg" style={{height: "20px", width:"20px", paddingTop:"10px" }}/> I completed my 12th board in 2020. Acheived perfect score in mathematics</p>
    //     </div>
    // </div>

    // </div>

    <section
      class="qualification__section service__section"
      id="qualification"
    >
      <h2 class="section__title">Qualification</h2>
      <span class="section__subtitle">My personal journey</span>

      <div
        class="qualification__container container grid services__container"
      >
        <div class="qualification__tabs">
          <div
            class="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i class="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div class="qualification__sections">
          {/* <!--====== Qualification Content 1 ======--> */}
          <div
            class="qualification__content qualifiation__active services__content"
            data-content
            id="education"
          >
            {/* <!--====== Qualification 1 ======--> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">ICSE</h3>
                <span class="qualification__subtitle"
                >M.G.S. <br />Class- 10th</span>
                <div class="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>
                  - 2018
                </div>
                <span
                  class="button button--flex button--small button--link services__button"
                >
                  {/* View More
                  <i class="uil uil-arrow-right button__icon"></i> */}
                  95.8%
                </span>
                <div class="services__modal">
                  <div class="services__modal-content">
                    <h4 class="services__modal-title">
                      Class 10th Summary :
                    </h4>
                    <i class="uil uil-times services__modal-close"></i>
                    <ul class="services__modal-services grid">
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__moda-icon"
                        ></i>
                        <p>
                          Subjects studied: Science, Maths, English,
                          Social Studies,Kannada,Hindi.
                        </p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__moda-icon"
                        ></i>
                        <p>Scored 91%</p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__moda-icon"
                        ></i>
                        <p>Came runners up in inter-school Ball Badminton</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>

            {/* <!--====== Qualification 2 ======--> */}
            <div class="qualification__data">
              <div></div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
              <div>
                <h3 class="qualification__title">ISC</h3>
                <span class="qualification__subtitle">M.G.S <br />Class 12th</span>
                <div class="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>
                  - 2020
                </div>
                <span
                  class="button button--flex button--small button--link services__button"
                >
                  93.5%
                  {/* <i class="uil uil-arrow-right button__icon"></i> */}
                </span>
                <div class="services__modal">
                  <div class="services__modal-content">
                    <h4 class="services__modal-title">
                      Class 12th Summary :
                    </h4>
                    <i class="uil uil-times services__modal-close"></i>
                    <ul class="services__modal-services grid">
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__moda-icon"
                        ></i>
                        <p>
                          Subjects studied: Physics, Chemistry, Maths,
                          English, Statistics , Hindi.
                        </p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__moda-icon"
                        ></i>
                        <p>Scored 87.5%</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--====== Qualification 3 ======--> */}
            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">College</h3>
                <span class="qualification__subtitle">Indian institute of Technology, Kharagpur</span>
                <div class="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>
                  2020 - 2024
                </div>
                <span
                  class="button button--flex button--small button--link services__button"
                >
                  8.64/10
                  {/* <i class="uil uil-arrow-right button__icon"></i> */}
                </span>
                <div class="services__modal">
                  <div class="services__modal-content">
                    <h4 class="services__modal-title">College Summary :</h4>
                    <i class="uil uil-times services__modal-close"></i>
                    <ul class="services__modal-services grid">
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__modal-icon"></i>
                        <p>
                          Studying core subjects of IT including DSA, Embedded
                          systems, Design analysis and algorithm, Operating
                          systems, and Computer architecture .
                        </p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__modal-icon"
                        ></i>
                        <p>Scored an aggregate of 8.50 CGPA till now.</p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__modal-icon"
                        ></i>
                        <p>
                          Student coordinator in media and
                          publication club of the college.
                        </p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__modal-icon"
                        ></i>
                        <p>
                          Club Advisor for GeekHub.
                        </p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__modal-icon"
                        ></i>
                        <p>
                          CodeBlaze hackathon winners under open innovation.
                        </p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__modal-icon"
                        ></i>
                        <p>
                          Runners in Edu-Vitality Hackathon in the track of AI in Education.
                        </p>
                      </li>
                      <li class="services__modal-service">
                        <i
                          class="uil uil-check-circle services__modal-icon"
                        ></i>
                        <p>
                          Finalist in Dark Pattern Buster Hackathon conducted by Department of Consumer Affairs of India.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education;