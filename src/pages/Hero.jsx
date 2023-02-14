import React, { Component } from "react";
export default function Hero() {
  return (
    <section id="hero" className="bg-white lg:pt-0">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center hero-image">
            <div className=" w-full hero-text text-center items-center absolute px-10">
                <h1 className="text-4xl font-bold text-primary">This is for you, Laurensia Simanihuruk</h1>
                <p className="font-semibold text-2xl text-yellow-400">a small message for the person that I love the most</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
