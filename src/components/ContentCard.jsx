import React, { Component } from "react";
import { useState } from "react";
import Image from "../assets/1.JPG"

export default function Card(props) {
    const [showModal, setShowModal] =useState(false);
  return (
    <div className="w-full lg:w-1/3 justify-center p-5 flex flex-wrap">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={Image}
          alt="content"
          onClick={() => setShowModal(true)}
        />
      {showModal ? (
        <>
          <div
            className="px-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center px-5">
                    {props.title}
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ul className="block">
                    {props.content.map((item)=>(
                        <li className="list-group">{item}</li>
                    ))}
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
      </div>
  );
}
