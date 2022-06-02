import React from "react";

const About = () => {
	return (
		<>
			<h1 className="mt-32 text-center text-5xl titulo font-bold">Sobre Mi</h1>

			<figure className="bg-slate-100 p-8 md:p-0 dark:bg-slate-800 mt-10 mx-10 md:mx-64">
				<img
					className="w-24 h-auto md:w-48 md:h-auto mx-auto py-10 rounded-full"
					src="https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166?k=20&m=1187576166&s=612x612&w=0&h=q-REVReHr8QRzKQ_TRWGU7KTP6OBIgGh-zlg91-S-j0="
					alt="robot"
				/>
				<div class="pt-6 md:p-8 text-center mx-auto space-y-4">
					<blockquote>
						<p class="text-lg font-medium text-white">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Reprehenderit culpa ex, aspernatur ab earum cupiditate amet modi
							aperiam accusantium iure veniam aliquam eum maxime beatae. Ratione
							officiis, porro molestias alias illum accusamus explicabo autem
							numquam nihil eos incidunt provident neque?
						</p>
					</blockquote>
					<figcaption class="font-medium">
						<div class="text-sky-500 dark:text-sky-400">
							Edahi Garrido Sedeño
						</div>
						<div class="text-slate-700 dark:text-slate-500">
							Desarrollo Front-End
						</div>
					</figcaption>
				</div>
			</figure>
		</>
	);
};

export default About;
