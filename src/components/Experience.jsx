import React, { useState } from "react";
import ExperienceDetails from "./ExperienceDetails.jsx";
import experiences from "../experience.js"
import Navigation from "./Navigation.jsx";

export default function Experience() {
    var [id,setId]= useState(1);
    function fillDetail(id){
        setId(id);
    }
    return (
        <div className="experience-page">
            <Navigation />
            <input type="checkbox"></input>
            <div className="experience-navbar" style={{ color: "white", fontSize: "24px" }}>
                {experiences.map(ele=>{
                    return (
                        <p onClick={()=>{fillDetail(ele.id)}}>{ele.name}</p>
                    )
                })}
                <ExperienceDetails  expId={id-1}></ExperienceDetails>
            </div>
        </div>
    );
}