import React, {useState, useEffect} from "react";

function Name(){
    var [name, setName]= useState("Pragati Jhunjhunwala");
    var [changeName, xyz]= useState("Pragati Jhunjhunwala");
    useEffect(()=>{
        var index=0;
        setName("")
        var x= changeName;
        var len= x.length;
        var prev="";
        const typeWriter=()=>{
            if(index<len){
                prev=prev+x.charAt(index)
                setName(()=>prev)
                index++;
                setTimeout(typeWriter, 200);
            }
        };

        typeWriter();

    },[changeName])

    useEffect(()=>{
        setTimeout(()=>{
            if(changeName==="Pragati Jhunjhunwala"){
                xyz("Web Developer");
            }else{
                xyz("Pragati Jhunjhunwala");
            }
        }, 6000)
    })

    return (
        <h1 className="name-write"> I am {name}</h1>
    )
}

export default Name;