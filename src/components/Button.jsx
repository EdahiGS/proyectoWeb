import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
	return (
		<Link
			className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
			to={"/sobre-mi"}
		>Sobre Mi</Link>
	);
};

export default Button;
