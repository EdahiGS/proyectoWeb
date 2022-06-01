import React from "react";
import ReactPlayer from "react-player";
const Inicio = () => {
	return (
		<>
			<div className="video-inicio -z-10">
				<ReactPlayer
					className={"video"}
					url="https://youtu.be/xoWxv2yZXLQ"
					width={"100%"}
					height={"100%"}
					playing={true}
					loop={true}
					muted={true}
				/>
				<h1>Edahi Garrido Sedeño</h1>
				<h1 className="edahi">Edahi</h1>
			</div>
		</>
	);
};

export default Inicio;
