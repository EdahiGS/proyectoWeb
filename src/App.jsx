import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Layout/pages/Inicio";
import Contacto from "./Layout/pages/Contacto";
import Proyectos from "./Layout/pages/Proyectos";
import About from "./Layout/pages/About";
import Layout from "./Layout/Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Inicio />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/sobre-mi" element={<About />} />
					<Route path="/proyectos" element={<Proyectos />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
