import React from "react";
import agencia from "../resources/agencia.png";
import cafeteria1 from "../resources/cafeteria1.png";
import cafeteria2 from "../resources/cafeteria2.png";
import cultivos from "../resources/cultivos.png";
import fitness from "../resources/fitness.png";
import ejercicio from "../resources/ejercicio.png";
import clima from "../resources/clima.png";
import calendar from "../resources/calendar.png"
const Card = () => {
  return (
    <>
      <h1 className="mt-32 text-center text-5xl titulo font-bold">Proyectos</h1>
      <div className="flex flex-wrap justify-around">
        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img
              className="w-full"
              src={agencia}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Agencia de Viajes</div>
              <p className="text-gray-700 text-base">
                Página creada con EXPRESS JS, PUG, NODEJS Y MYSQL.
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://mighty-oasis-48848.herokuapp.com/"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img
              className="w-full"
              src={cafeteria1}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Página Sencilla de Cafeteria
              </div>
              <p className="text-gray-700 text-base">
                Página creada para practicar JQUERY con menú y una pequeña
                galería.
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://coffe-practice.vercel.app/"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img
              className="w-full"
              src={cultivos}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Sitio Web de Cultivo</div>
              <p className="text-gray-700 text-base">
                Plantilla Adaptada para hacer un sitio web de cultivos, creada
                con HTML, CSS y JS (Usando una libreria llamada WOW.JS)
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://vitaproyecto.vercel.app/"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img className="w-full" src={calendar} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Aplicación Clon de Google Calendar</div>
              <p className="text-gray-700 text-base">
                Clon de Google Calendar, usando React, Animate.css y haciendo despligue en Railway (Backend) y Vercel (Frontend)
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://calendar-app-khaki.vercel.app/auth/login"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img
              className="w-full"
              src={fitness}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Página de Fitness</div>
              <p className="text-gray-700 text-base">
                Creada con HTML 5 y CSS3 haciendo uso de Bootstrap, la cree con
                la finalidad de practicar diseño y uso de colores.
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://fitness-web-mu.vercel.app/"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img
              className="w-full"
              src={ejercicio}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Ejercicios Básicos</div>
              <p className="text-gray-700 text-base">
                Ejercicios utilizando HTML, CSS y JS, con la finalidad de
                practicar.
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://ejercicios-js-mauve.vercel.app/"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img
              className="w-full"
              src={cafeteria2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Página de Cafeteria</div>
              <p className="text-gray-700 text-base">
                Similar al sitio anterior con la diferencia de ser más extensa,
                haciendo uso de Bootstrap y JQuery.
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://cafeteria-web.vercel.app/"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>

        <div className="flex mt-20">
          <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
            <img className="w-full" src={clima} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">API de Clima</div>
              <p className="text-gray-700 text-base">
                Aplicación simple en la cual saco datos de una API, y te muestra
                la temperatura y zona, además de usar unos gifs.
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 text-center">
              <a
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                href="https://weather-app-khaki-six.vercel.app/"
              >
                Enlace al Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
