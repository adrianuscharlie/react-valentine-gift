import React, { Component } from "react";
import { useState } from "react";
export default function GaleryCard(props) {
  const [text,setText]=useState(true)
  
  return (
    <div className="w-full lg:w-1/4 justify-center mb-20 px-10 items-center flex flex-wrap hover:scale-110">
      <div className="max-w-xs lg:max-w-sm shadow-lg p-5 pb-16 bg-white rounded-md" onClick={()=>setText(!text)}>
       {text? <img
        className="w-full rounded-md transition"
        src={props.img}
        alt="content"
      />:<p className="text-md bg-slate-200 rounded-md text-justify p-2">
      {props.desc}</p>}
        <p className="text-xl font-bold mt-5  text-black">{props.title}</p>
      </div>
    </div>
  );
}
