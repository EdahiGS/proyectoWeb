import React from "react";

const About = () => {
  return (
    <>
      <h1 className="mt-32 text-center text-5xl titulo font-bold">Sobre Mi</h1>

      <div className="p-8 md:p-0 mt-10 mx-10 md:mx-64 flex about-meSize">
        <img
          className="py-10 rounded-full"
          src="https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=20&m=1187576166&s=612x612&w=0&h=q-REVReHr8QRzKQ_TRWGU7KTP6OBIgGh-zlg91-S-j0="
          alt="robot"
        />
        <div className="pt-6 md:p-8 text-center mx-auto space-y-4 sm:mt-60">
          <blockquote>
            <p className="text-lg font-medium text-black">
              Egresado de Ingeniería en Sistemas con gran interés en acceder al
              campo laboral para poner en práctica mis conocimientos. Soy una
              persona trabajadora, comunicativa y comprometida.
            </p>

            <p className="text-lg font-medium text-black">
              Me gusta leer fantasía, jugar videojuegos, nadar y el café ☕
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Edahi Garrido Sedeño
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Desarrollo Front-End
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Soporte Técnico
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Mantenimiento de Hardware y Software
            </div>
          </figcaption>
        </div>
      </div>
    </>
  );
};

export default About;
