import React from "react";

const Contacto = () => {
  return (
    <>
      <h1 className="mt-32 text-center text-5xl titulo font-bold">
        Contáctame
      </h1>
      <div className="pt-6 md:p-8 text-center mx-auto space-y-4 sm:mt-60">
        <a
          className="text-lg font-medium text-black boton-contacto"
          href="mailto:edahiegs@gmail.com?Subject=Contacto Página Web"
        >
          Click Aquí &#x2709;	
        </a>
      </div>
    </>
  );
};

export default Contacto;
