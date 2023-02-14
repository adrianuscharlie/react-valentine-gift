import React, { Component } from "react";

export default function About() {
  return (
    <section id="about" className="py-10 bg-slate-900">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 justify-center text-justify px-10 lg:p-20">
            <h1 className="font-bold text-primary text-4xl">Welcome Lalak.</h1>
            <p className="text-xl text-white pt-5">
              Halo Lalak, aku persembahkan web ini buat kamu. Ini kado hari
              valentine sekaligus permintaan maafku buat kamu. Aku harap kamu
              terima dan seneng setelah aku buatin ini ya, maaf kalo misal masih
              jelek dan ga sesuai ekspetasimu lak. Selamat menikmati isi dari
              website ini ya :)
            </p>
          </div>
          <div className="w-full lg:w-1/2 justify center text-justify pt-5 px-10 lg:pt-32">
            <p className="text-xl text-white">
              Website ini isinya banyak, ada foto-foto kita, ada gamesnya juga,
              ada letter juga dari aku buat kamu. Website ini intinya memuat
              semua yang aku rasain selama ini ke kamu, Lak. Semoga apa yang aku
              rasain bisa tersampaikan ke kamu ya dan kamu paham gimana sih
              feelingku. Maaf ya kalo isinya kurang komplit, karena sebagian foto-foto udah kehapus, jadi seadanya ya fotonya, Makasih Lalak
            </p>
            <h6 className="font-bold text-2xl text-yellow-500 text-end pr-3">— Charlie</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
