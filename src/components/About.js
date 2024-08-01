import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-zinc-800">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <img
            className="w-80 rounded-full flex-shrink-0 object-cover object-center"
            alt="hero"
            src="./avatar.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Olá, eu sou Evaldo. 
            <br  />
            Adoro criar apps incríveis.
          </h1>
          <p className="mb-8 leading-relaxed">
          Encontrei nesse mercado muitas possibilidades de colocar em prática a minha criatividade e paixão.
          
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="justify-center inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Download CV
            </a>
            <a
              href="#projects"
              className="justify-center ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Veja meus trabalhos 
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}