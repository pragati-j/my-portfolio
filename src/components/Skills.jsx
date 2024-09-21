import React, { useState } from "react";
import java from "../java.png"
import cpp from "../c-.png"
import js from "../java-script.png"
import py from "../python.png"
import html from "../html.png"
import css from "../css-3.png"
import django from "../django.png"
import react from "../react.svg"
import node from "../node-js.png"
import web from '../web.png';
import sql from "../sql-server.png"
import bootstrap from "../bootstrap.png"


export default function Skills(props){

  const [list, changeList]= useState(1);
  function displayContent(event){
    var id= event.target.id;
    var klist= document.getElementById("skill-list-"+id.slice(-1));
    klist.classList.toggle('skills__open');
    klist.classList.toggle('skills__close');
    
  }
    return(
        <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>

        <div class="skills__container container grid">
          <div>
            <div class="skills__content skills__open" id="skill-list-1">
              <div class="skills__header">
                <i class="fas fa-pencil-ruler skills__icon"></i>

                <div >
                  <h1 class="skills__title">Programming Languages</h1>
                </div>

                <i class="uil uil-angle-down skills__arrow" id="skill1" onClick={displayContent}></i>
              </div>
              

              <div class="skills__list grid" >
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">C++</h3>
                  </div>
                  
                </div>
                
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Java</h3>
                    </div>
                    
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">JavaScript</h3>
                    </div>
                    
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Python</h3>
                  </div>
                   
                  </div>
                  {/* <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">TypeScript</h3>
                    </div>
                  </div> */}
                  
              </div>
            </div>

            <div class="skills__content skills__close" id="skill-list-2">
              <div class="skills__header" id="skill2">
                <i class="fas fa-code skills__icon"></i>

                <div>
                  <h1 class="skills__title">IT Constructs</h1>
                </div>

                <i class="uil uil-angle-down skills__arrow" id="skill2" onClick={displayContent}></i>
              </div>

              <div class="skills__list grid " >
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">DBMS</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">DS & Algorithms</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">OOP</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">OS</h3>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>

          <div>
            <div class="skills__content skills__close" id="skill-list-3">
              <div class="skills__header">
                <i class="fas fa-swatchbook skills__icon"></i>
                <div>
                  <h1 class="skills__title">Technologies</h1>
                </div>

                <i class="uil uil-angle-down skills__arrow" id="skill3" onClick={displayContent}></i>
              </div>

              <div class="skills__list grid ">
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">Git</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">MongoDB</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">MySQL</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">ReactJs</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">NodeJs</h3>
                  </div>
                  
                </div>
                
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">Tailwind</h3>
                  </div>
                  
                </div>
                <div class="skills__data">
                  <div class="skills__titles">
                    <h3 class="skills__name">postgresSQL</h3>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}