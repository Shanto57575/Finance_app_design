import React from "react";
import logo from "../assets/Framelogo.png";
import webname from "../assets/webname.png";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center mt-5 lg:justify-between">
			<div className="flex items-center gap-2">
				<img className="h-5 lg:h-full" src={logo} alt="logo" />
				<img className="w-10 lg:w-full" src={webname} alt="name" />
			</div>
			<div className="flex lg:items-center justify-center lg:text-lg gap-3 cursor-pointer flex-col lg:flex-row">
				<span className="text-[#FF5555] text-center">Home</span>
				<span className="hover:text-[#FF5555] text-center">About Us</span>
				<span className="hover:text-[#FF5555] text-center">Pricing</span>
				<span className="hover:text-[#FF5555] text-center">Features</span>
			</div>
			<button className="bg-black w-20 lg:w-32 px-2 lg:px-4 h-12 text-xs rounded text-[#FFFFFF] hover:bg-[#FF5555] duration-700">
				Download
			</button>
		</div>
	);
};

export default Navbar;
