import React from "react";
import agencia from '../resources/agencia.png'
import cafeteria1 from '../resources/cafeteria1.png'
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
							src="src/resources/cultivos.png"
							alt="Sunset in the mountains"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">
								Sitio Web de Cultivo
							</div>
							<p className="text-gray-700 text-base">
								Plantilla Adaptada para hacer un sitio web de cultivos, creada con HTML, CSS y JS (Usando una libreria llamada WOW.JS)
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
			</div>
			<div className="flex flex-wrap justify-around">
				<div className="flex mt-20">
					<div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
						<img
							className="w-full"
							src="src/resources/fitness.png"
							alt="Sunset in the mountains"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">Página de Fitness</div>
							<p className="text-gray-700 text-base">
								Creada con HTML 5 y CSS3 haciendo uso de Bootstrap, la cree con la finalidad de practicar diseño y uso de colores.
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
							src="https://www.caracteristicas.co/wp-content/uploads/2018/11/montan%CC%83as-e1543190126108.jpg"
							alt="Sunset in the mountains"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p className="text-gray-700 text-base">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptatibus quia, nulla! Maiores et perferendis eaque,
								exercitationem praesentium nihil.
							</p>
						</div>
						<div className="px-6 pt-4 pb-5 text-center">
							<a
								className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								href="/Enlace al Sitio"
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
							src="src/resources/cafeteria2.png"
							alt="Sunset in the mountains"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">Página de Cafeteria</div>
							<p className="text-gray-700 text-base">
								Similar al sitio anterior con la diferencia de ser más extensa, haciendo uso de Bootstrap y JQuery.
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
			</div>
		</>
	);
};

export default Card;
