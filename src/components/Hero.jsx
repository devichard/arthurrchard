import "boxicons/css/boxicons.min.css";
import lemonglow from "../assets/lemonglow.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleContato = () => {
    const whatsappUrl = "https://wa.link/l5b5gu";
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex flex-col md:flex-row items-center justify-between min-h-[calc(90vh-6rem)] overflow-hidden px-4">
      <div
        className="max-w-xl z-10 text-center lg:text-left
                      mt-[20%] md:mt-[10%] lg:mt-0 lg:ml-[17%] px-4 sm:px-6 lg:px-0"
      >
        {" "}
        {/* Principal */}
        <h1
          className={`
            text-3xl mt-48 sm:text-4xl md:text-5xl lg:text-5xl font-bold my-6
            transition-all duration-700 ease-out transform 
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            } // Aplicando o efeito aqui
          `}
        >
          SEU <span className="text-[#7ebc45]">NEGÓCIO</span>, <br />
          SUA <span className="text-[#4ca724]">SOLUÇÃO</span> DE PAGAMENTOS,{" "}
          <br />
          SEU <span className="text-[#7ebc45]">FUTURO</span>.
        </h1>
        {/* Descrição */}
        <p
          className={`
            text-base sm:text-lg tracking-tight max-w-[25rem] lg:max-w-[30rem] mx-auto lg:mx-0
            transition-all duration-700 ease-out delay-200 transform
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            } // Aplicando o efeito aqui
          `}
        >
          {" "}
          Leve suas transações ao próximo nível. Oferecemos a orquestração de
          pagamentos mais fluida e segura do mercado,{" "}
          <b>
            com multi-adquirência inteligente, split de pagamentos próprio
          </b>{" "}
          e a tranquilidade de um
          <b> sistema anti-fraude e anti-chargeback de última geração</b>.
        </p>
        {/* TagBox com gradiente */}
        <div
          className={`
            bg-gradient-to-r from-[#05B800] to-[#FFF]
            shadow-[0_0_15px_rgba(255,255,255,0.4)]
            relative w-[95%] sm:w-96 h-12 rounded-lg mt-5 mx-auto lg:mx-0
            transition-all duration-700 ease-out delay-500 transform 
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            } 
            group 
            animate-button-glow 
          `}
        >
          <button
            className="absolute inset-[3px] bg-black rounded-lg
                      flex items-center justify-center font-semibold text-white"
            onClick={handleContato}
          >
            Fale com um especialista
          </button>
        </div>
      </div>

      <div
        className="absolute -right-20 -top-20 lg:relative lg:right-0 lg:top-0
                      lg:w-1/2 flex items-center justify-center 
                      lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[10%]
                      z-0 hidden lg:block"
      ></div>
      <div
        className={`
          absolute -top-20 -right-40 w-full opacity-50 
          md:opacity-100 md:w-1/2 md:top-1/2 md:-translate-y-1/2 md:right-[5%]
          flex justify-center items-center z-0
          transition-all duration-1000 ease-out 
          transform 
          ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"} 
        `}
      >
        <img
          src={lemonglow}
          alt="Formas abstratas verdes e amarelas flutuando"
          className="w-full mr-24 mt-28 max-w-sm sm:max-w-lg lg:max-w-2xl xl:max-w-6xl
                     drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                     md:drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]
                     animate-float"
        />
      </div>
    </main>
  );
};

export default Hero;
