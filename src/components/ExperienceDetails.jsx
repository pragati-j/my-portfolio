import React, { Fragment } from "react";
import experiences from "../experience.js";

export default function ExperienceDetails(props) {
    return (
        <div className="experience-content">
            <h3>PROJECT: {experiences[props.expId].project}</h3>
            <p>Responsiblities:</p>
            <ul>
                {experiences[props.expId].responsible.map(ele=>{
                    return (
                        <li>{ele}</li>
                    )
                })}
            </ul>

        </div>
    )
}