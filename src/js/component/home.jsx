import React,{useState} from "react";
import BtnIntro from "./btnintro.jsx";
import Wallpapper from "./wallpapper.jsx";
import Navbar from "./navbar.jsx";



const Home = (props) => {
	const [isStarter, setIsStarter] = useState(false)

	return (
		<div>

		{isStarter ? <Wallpapper/> : <BtnIntro funcion={setIsStarter}/>}
	
		</div>
		)
};

export default Home;
