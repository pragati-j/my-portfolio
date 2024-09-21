import React, { useState } from "react";
import messLogo from "../mess-manager.png"
import stock from "../stock.jpeg"
import fu from "../findUnique.jpg"


function Project(){

    const [curr, changeCurr]= useState(1);

    function slideNext(){
        console.log("NEXT");
        console.log(curr);
        const currSlide= document.getElementById("project_"+curr);
        currSlide.classList.remove("swiper-slide-active");
        currSlide.classList.add("swiper-slide-unactive");

        console.log(currSlide.classList.toString())
        var newCurr=0;
        if(curr==3){
            newCurr=1;
        }else{
            newCurr=(curr+1);
        }
        console.log(newCurr);
        const newSlide= document.getElementById("project_"+newCurr);
        newSlide.classList.add("swiper-slide-active");
        newSlide.classList.remove("swiper-slide-unactive");
        changeCurr(newCurr)
        console.log(currSlide.classList.toString())
        console.log(newSlide.classList.toString())

    }

    function slidePrev(){
        const currSlide= document.getElementById("project_"+curr);
        currSlide.classList.add("swiper-slide-unactive");
        currSlide.classList.remove("swiper-slide-active");
        console.log(currSlide.classList.toString())
        var newCurr=0;
        if(curr==1){
            newCurr=3;
        }else{
            newCurr=(curr-1);
        }
        console.log(newCurr);
        const newSlide= document.getElementById("project_"+newCurr);
        newSlide.classList.add("swiper-slide-active");
        newSlide.classList.remove("swiper-slide-unactive");
        changeCurr(newCurr)
        console.log(currSlide.classList.toString())
        console.log(newSlide.classList.toString())

    }


    return (
        <section class="portfolio section" id="portfolio">
        <h2 class="section__title">Projects</h2>
        <span class="section__subtitle">Most recent work</span>

        <div class="portfolio__container container swiper-container swiper-container-flip swiper-container-cube">
          <div class="swiper-wrapper ">
            {/* <!-- ------------------------portfollio 1-------------------- --> */}

            <div class="portfolio__content grid swiper-slide swiper-slide-active" id="project_1">
              <img src={messLogo} class="portfolio__img" />

              <div class="portfolio__data">
                <h3 class="portfolio__title">
                  Mass-Manager
                </h3>
                <p class="portfolio__description">
                  Mess Manager is a full-stack project built on Node.js, Express.js, React, and PostgresSQL. The project is built with an intention to minimize food wastage in mess on daily basis. The application allows users to select the food from the menu updated by mess admins with specified quantity beforehand. This also mess admins to manage the mess more efficiently as well as give them overview of their daily business. 
                </p>
                <a
                  href="https://github.com/pragati-j/mess-manager"
                  class="button button--flex button--small portfolio__button"
                >
                  GitHub Repository
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
                {/* <a
                  href="https://darksurfer.streamlit.app/"
                  class="button button--flex button--small portfolio__button"
                >
                  See Live
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a> */}
              </div>
            </div>
            {/* <!-- ------------------------portfollio 2-------------------- --> */}

            <div class="portfolio__content grid swiper-slide swiper-slide-unactive" id="project_2">
              <img src={stock} class="portfolio__img" />

              <div class="portfolio__data" >
                <h3 class="portfolio__title">
                  Amazon Stock Price Prediction
                </h3>
                <p class="portfolio__description" >
                This project successfully predicted Amazon's stock prices using a Long Short-Term Memory (LSTM) neural network. After data cleaning and feature engineering, the model achieved an RMSE of 86 and an L1 loss of 48, outperforming traditional ARIMA models. The LSTM's ability to capture complex patterns and dependencies in time series data proved crucial in accurately forecasting stock prices.
                </p>
                <a
                  href="https://github.com/pragati-j/Amazon-stock-price-prediction"
                  class="button button--flex button--small portfolio__button"
                >
                  GitHub Repository
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
                
              </div>
            </div>

            {/* <!-- ------------------------portfollio 3-------------------- --> */}
            <div class="portfolio__content grid swiper-slide swiper-slide-unactive" id="project_3">
              <img src={fu} class="portfolio__img" />

              <div class="portfolio__data">
                <h3 class="portfolio__title">Unique Finds</h3>
                <p class="portfolio__description">
                The Problems Setter project successfully created a collaborative online platform for question uploading, solving, and sharing. Using Node.js, Bootstrap, MongoDB, and jQuery, the platform implemented features like question tagging, difficulty classification, acceptance rates, and user ratings. This website helps people learn together and share their knowledge.
                </p>
                <a
                  href="https://github.com/pragati-j/Unique-Finds"
                  class="button button--flex button--small portfolio__button"
                >
                  GitHub Repository
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a>
                {/* <a
                  href="https://venkateeshh.github.io/Spotify-Clone/"
                  class="button button--flex button--small portfolio__button"
                >
                  See Live
                  <i class="uil uil-external-link-alt button__icon"></i>
                </a> */}
              </div>
            </div>
          </div>
          <div class="swiper-button-next" onClick={slideNext}>
            {/* <i class="uil uil-angle-right-b swiper-portfolio-icon"></i> */}
          </div>
          <div class="swiper-button-prev" onClick={slidePrev}>
            {/* <i class="uil uil-angle-left-b swiper-portfolio-icon"></i> */}
          </div>
          {/* <!-- add pagination --> */}
          <div class="swiper-pagination"></div>
        </div>
      </section>
    )
}

export default Project;