import React, { Component } from "react";
import Card from "../components/ContentCard";
import { content } from "../Data";
import { useState } from "react";
export default function Content() {
  const [img, setImg] = useState(require("../assets/feel_1.JPG"));
  const [modal, setModal] = useState(false);
  function handleChangeEnter() {
    setImg(require("../assets/feel_2.JPG"));
  }
  function handleChangeLeave() {
    setImg(require("../assets/feel_1.JPG"));
  }
  return (
    <>
      <section id="content" className="pt-10 lg:pt-20">
        <div className="container">
          <h2 className="font-bold text-xl text-center text-primary">
            Let's play some games
          </h2>
          <h1 className="font-bold text-3xl px-3 lg:text-4xl text-center text-slate-900 pt-5">
            Open the card one by one ya Lak :)
          </h1>
          <div className="flex flex-wrap p-20 items-center justify-center">
            {content.map((item) => (
              <Card title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </section>
      <section id="quotes" className="pt-10 bg-slate-100">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 justify-center mb-5 px-10 lg:px-36 lg:py-10">
              <div className="max-w-xs lg:max-w-sm shadow-lg p-10">
                <img
                  className="w-full rounded-md ransition duration-500 ease-in-out"
                  src={img}
                  alt="content"
                  onMouseEnter={() => handleChangeEnter()}
                  onMouseOut={() => handleChangeLeave()}
                  onClick={() => setModal(true)}
                />
                <p className="text-xl font-bold py-4 lg:p-5 text-primary">
                  Laurensia Simanihuruk
                </p>
                <p className="text-base">Clik Fotonya :)</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 justify-center text-justify pt-10 px-10 lg:p-20">
              <div className="flex flex-wrap rounded-md text-justify">
                <h1 className="font-bold text-3xl text-primary mb-10">
                  Falling in love with you is the greatest gift that God has
                  given me
                </h1>
                <h2 className="font-bold text-dark text-3xl mb-10">
                  "I've learned that people will forget what you said, people
                  will forget what you did, but people will never forget how you
                  made them feel.”
                </h2>
                <h6 className=" w-full font-bold text-2xl text-yellow-500 text-end pr-3 mb-10">
                  — Maya Angelou
                </h6>
                {modal ? (
                  <>
                    <div className="px-10 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-center px-5">
                              Content Slay Lalak :)
                            </h3>
                          </div>
                          {/*body*/}
                          <div className="relative p-6  m-10">
                            <iframe
                              width="420"
                              height="315"
                              src="https://www.youtube.com/embed/YLmL_43B_d0" className="w-full"
                            />
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setModal(false)}
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
          </div>
        </div>
      </section>
    </>
  );
}
