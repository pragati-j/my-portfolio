import React, { useState } from "react";

export default function Contact(){
    const [message, changeMessage]= useState("");

    function onType(event){
        // console.log(event);
        var key= event.key;
        if(key.length==1){
            changeMessage(prev=> prev+key);
        }else if(key=="Backspace"){
            changeMessage(prev=>prev.slice(0,-1));
        }
        console.log(message)
    }
    return (
        <section class="contact section" id="contact">
        <h2 class="section__title">Contact Me</h2>
        <span class="section__subtitle">Get in touch</span>

        <div class="contact__container container grid">
          <div>
            <div class="contact__information">
              <i class="uil uil-calling contact__icon"></i>

              <div>
                <h3 class="contact__title">Contact Me</h3>
                <span class="contact__subtitle"
                  ><a href="tel:6291891619"></a>6291891619</span>
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-envelope-minus contact__icon"></i>

              <div>
                <h3 class="contact__title">Email</h3>
                <span class="contact__subtitle">pragatijj5@gmail.com</span>
              </div>
            </div>

            <div class="contact__information">
              <i class="uil uil-map-marker contact__icon"></i>

              <div>
                <h3 class="contact__title">Location</h3>
                <span class="contact__subtitle">Hyderabad, Telengana, India</span
                >
              </div>
            </div>
          </div>

          <form action="" class="contact__form grid">
            <div class="contact__inputs grid">
              <div class="contact__content">
                <label for="" class="content__label">Name</label>
                <input type="text" class="contact__input" />
              </div>

              <div class="contact__content">
                <label for="" class="content__label">Email</label>
                <input type="Email" class="contact__input" />
              </div>
            </div>

            <div class="contact__content">
              <label for="" class="content__label">Message</label>
              <textarea
                name=""
                id=""
                cols="0"
                rows="7"
                class="contact__input"
                onKeyDown={onType}
              ></textarea>
            </div>

            <div>
              <a
                href={" mailto: pragatijj5@gmail.com?subject=Testing out mailto! &body="+message}
                class="button button--flex"
              >
                Send Message
                <i class="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    )
}