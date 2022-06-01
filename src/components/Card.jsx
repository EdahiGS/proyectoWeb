import React from "react";
import { Link } from "react-router-dom";
const Card = () => {
	return (
		<>
		<h1 className="mt-32 text-center text-5xl titulo font-bold">Proyectos</h1>
			<div className="flex flex-wrap justify-around">
				<div className="flex mt-20">
					<div className="max-w-sm rounded overflow-hidden shadow-lg ">
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
							<Link
								className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								to="/nosotros"
							>
								Nosotros
							</Link>
						</div>
					</div>
				</div>
				<div className="flex mt-20">
					<div className="max-w-sm rounded overflow-hidden shadow-lg ">
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
							<Link
								className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								to="/nosotros"
							>
								Nosotros
							</Link>
						</div>
					</div>
				</div>
				<div className="flex mt-20">
					<div className="max-w-sm rounded overflow-hidden shadow-lg ">
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
							<Link
								className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
								to="/nosotros"
							>
								Nosotros
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
