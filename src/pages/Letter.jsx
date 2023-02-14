import React, { Component } from "react";
import { useState } from "react";
export default function Letter() {
  const [letter, setLetter] = useState(false);
  return (
    <section id="letter" className="letter py-10 bg-white">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 justify-center  items-center text-justify px-5 lg:p-10">
            <h1 className="font-bold text-primary text-4xl">
              My Letter For You.
            </h1>
            <p className="text-xl text-black pt-5">
              Dan tibalah kita di akhir kado valentine. Makasih udah coba buat
              explore website ini ya, maafin ya kalau banyak kurang dan kurang
              bagus :( Dan sebelum ku akhirin, ada surat buat kamu, kamu bisa
              buka ya, itu mewakilin apa yang aku rasain selama ini, aku harap
              kamu baca ya lak. Thank you so much
            </p>
            <button
              onClick={() => setLetter(!letter)}
              className="text-xl lg:text-2xl font-bold rounded-lg my-10 p-3 text-white hover:text-black bg-primary"
            >
              Click Here
            </button>
          </div>
          <div className="w-full lg:w-3/4 justify-center text-justify px-5 lg:px-20 lg:py-10">
            {letter ? (
              <>
                <h1 className="font-bold text-primary text-4xl">Laurensia</h1>
                <p className="text-xl text-black pt-5 mb-5">
                  Halo Lalak, ini letter buat jadi kado penutup valentine dan
                  juga sebagai permintaan maafku yaaa, sorry aku cuma bisa kasih
                  ini di hari valentine tahun ini, i hope you like it. Ga
                  kerasa, udah bulan februari aja, udah hari valentine juga nih
                  hehehe. Lewat surat ini, aku ingin mengungkapkan beberapa hal
                  yang aku rasain selama ini lak, buat kamu, aku harap kamu bisa
                  terima dan mengerti apa yang aku rasain selama ini ke kamu.
                </p>
                <p className="text-xl text-black pt-5 mb-5">
                  Pertama dan yang utama, aku mau meminta maaf atas perbuatanku
                  yang membuat kamu sakit hati sekali, bahkan sampai harus
                  terjadi yang namanya putus diantara kita. Pure itu emang
                  salahku, lak, maaf kalo aku beberapa kali menyangkal ya, tapi
                  seiring berjalannya waktu, ya aku sadar bahwa emang aku kurang
                  bisa menjaga hatimu sama kurang bisa jaga pesan yang kamu
                  kasih di sticky notes pas aku berangkat KKN itu. Maaf jika
                  kamu harus merasa sangat sakit hati, kamu harus mengemban
                  semua beban sakit hati yang muncul gara-gara aku, maaf jika
                  aku membuat sesuatu yang heboh di ranah keluargamu. Maaf jika
                  buat kamu nangis histeris yang bahkan akupun sampai ga tega
                  buat lihatnya. Maaf jika aku membuat kepercayaan kakakmu ke
                  aku jadi rusak juga, padahal kamu udah usaha susah payah buat
                  meyakinkan mereka bahwa aku baik. Aku minta maaf akan semua
                  hal yang aku perbuat ke kamu yang bikin kamu sakit hati,
                  apalagi akhir-akhir ini yang membuat kamu netesin air mata,
                  dan harusnya aku ga boleh menjadi alasan itu buat kamu, aku
                  minta maaf ya. Maaf juga untuk semua hal-hal negatif yang kita
                  lakuin bersama, apapun itu, aku berjanji akan menebus semua
                  dan bertanggung jawab buat fix you up agar ga kepikiran
                  hal-hal yang negatif lagi.
                </p>
                <p className="text-xl text-black pt-5 mb-5">
                  Selanjutnya, yang aku rasain tentang kejadian kemarin, jujur
                  kalo dari sisiku, ini terserah ya kamu mau terima atau engga,
                  aku cuma mau nyampein apa yang aku rasakan. Aku ngerasa ya
                  yang terjadi adalah emang aku ga jaga hatimu sih, aku bikin
                  kamu sakit hati dengan berbuat hal itu, tapi kalo dilihat dari
                  kacamataku, aku emang gaada feel apapun ke dia, lak. Semua
                  perbuatanku, semua perhatianku ya ku anggep biasa aja, gaada
                  yang lebih, karena aku sudah mengalamin gimana temenan sama
                  lawan jenis tanpa ada perasaan, jadi ya walaupun aku terlihat
                  melakukan hal yang menurut kamu over care ke dia, aku ga
                  ngerasain apa-apa, karena ya feelku cuma buat ke kamu. I'm all
                  yours, lak. Aku harap, kamu suatu saat bisa ngerti dan relate
                  tentang apa yang aku rasain ini, bahwa ya emang aku dan dia
                  gaada feel apapun sih. Aku sebenernya sangat menyayangkan ke
                  kamu, kenapa engga mencoba tembok yang ada di dalam dirimu,
                  coba kamu memposisikan diri ataupun dengerin apa yang aku
                  omong dan rasain, dan coba untuk mengurangi untuk ngeblock
                  semua yang aku omongin ke kamu seolah-olah ya intinya aku
                  salah seperti itu dan gamau tau. I hope kamu bisa grow up dan
                  kedepannya aku harap juga kamu bisa mengerti hal ini sih. Aku
                  tau kamu mungkin malah marah baca paragraf kedua ini, tapi
                  jika boleh dan kamu mau buat mahamin aku, coba kamu baca dan
                  ngertiin pelan-pelan sih. Aku ga nyalahin atau menyatakan kalo
                  aku ga salah, engga, aku emang salah ga bisa jaga hatimu, cuma
                  ini yang mau aku sampein ke kamu, lak.
                </p>
                <p className="text-xl text-black pt-5 mb-5">
                  Terlepas dari itu, kedepannya gimana, well, aku akan tetep
                  appreciate keputusanmu lak. Apapun yang kamu putusin, aku
                  dukung, aku mendoakan semoga bisa terlaksana dengan baik
                  apapun yang udah bulat kamu putuskan. Aku yakin kamu gaakan
                  ada penyesalan juga, i know. Aku bakal selalu ada buat kamu
                  lak, disaat kamu butuh temen, kamu butuh bantuan, kamu butuh
                  teman buat cerita, aku bakal ada di paling depan untuk itu
                  semua, untuk kamu. Aku bakal tetep nungguin kamu, ya walaupun
                  seems so impossible ya, tapi jika Tuhan kasih keajaiban buat
                  buka hatimu, aku akan tetep nungguin kamu apapun yang terjadi.
                  Jikalaupun aku dikasih kesempatan kedua, aku bakal lakuin
                  apapun buat kamu, buat kita bisa bareng lagi, semua effort
                  yang dibutuhkan akan aku jalanin, whatever it takes as long i
                  can be with you, Lak :) Aku akan bersikap sewajarnya juga, ga
                  lebih dari pacaran, tapi ijinin aku buat peduli, kepo, bahkan
                  tetep suka sama kamu ya lak? Kamu boleh benci aku, boleh
                  nganggep aku bangsat, cuman biarin aku tetep suka sama kamu
                  seperti biasanya ya? Karena bagiku, kamu merupakan salah satu
                  yang terbaik yang hadir dihidupku, yang Tuhan kasih ke aku,
                  penolong aku buat ngelewatin semua masa-masa hitam putih
                  diidupku, kamu nyalain hidupku penuh warna, dan ketulusanmu
                  selalu nyentuh ke hatiku. Kamu sangat berharga buat aku,
                  apapun aku bakal laluin asalkan bisa sama kamu, lak.
                </p>
                <p className="text-xl text-black pt-5 mb-5">
                  Dan yang terakhir, aku mau bilang makasih ke kamu. Terima
                  kasih udah dateng ya dihidupku, makasih sudah berikan impact
                  baik juga dihidupku. Terima kasih kamu selalu ada buat aku,
                  selalu support aku dalam suka maupun duka, aku sangat sangat
                  sangat senang dan berterima kasih punya kamu dihidupku, lak.
                  Mungkin kamu butuh waktu penyesuaian ya buat kamu bisa jalanin
                  keputusanmu? Iya aku paham, aku bakal kasih, tapi ketika kamu
                  butuh bantuan, lagi kesusahan, butuh tempat cerita, butuh
                  tempat untuk pulang, aku akan selalu ada disitu nungguin kamu
                  kapanpun dan dimanapun itu. Yang terakhir, sebelum
                  nantinya aku dah ga boleh lagi bilang sama kamu, happy valentine, <span className="font-bold text-rose-500">Charlie sayang banget sama kamu, Laurensia Simanihuruk ❤️</span>
                </p>
                <p className="text-2xl font-bold text-end text-primary pt-5 mb-5">—  Charlie</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
