import React, { Component } from "react";
import { DataGalery } from "../Data";
import GaleryCard from "../components/GaleryCard";
export default function Galery() {
  return (
    <>
      <section id="galery" className=" pt-10 lg:pt-20 bg-dark">
        <div className="container">
          <h2 className="font-bold text-xl text-center text-yellow-400">
            Moment-moment yang telah kita lakuin bareng, dibuka satu per satu ya
          </h2>
          <h1 className="font-bold text-3xl text-primary px-3 lg:text-4xl text-center  mb-10 pt-5">
            Gallery Charlie dan Lalak
          </h1>
          <div className="flex flex-wrap galery">
            {DataGalery.map((item) => (
              <GaleryCard img={item.url} title={item.title} desc={item.desc}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
