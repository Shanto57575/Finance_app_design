import React from "react";
import logo from "../assets/Framelogo.png";
import webname from "../assets/webname.png";

const Navbar = () => {
	return (
		<div className="lg:flex items-center justify-between mt-5">
			<p className="lg:flex items-center gap-x-2">
				<img src={logo} alt="logo" />
				<img src={webname} alt="name" />
			</p>
			<p className="lg:flex items-center justify-center text-lg gap-x-3 cursor-pointer leading-7">
				<span className="text-[#FF5555]">Home</span>
				<span className="hover:text-[#FF5555]">About Us</span>
				<span className="hover:text-[#FF5555]">Pricing</span>
				<span className="hover:text-[#FF5555]">Features</span>
			</p>
			<button className="bg-black lg:w-[180px] px-4 h-12 lg:h-[60px] rounded text-[#FFFFFF] hover:bg-[#FF5555] duration-700 hidden lg:block">
				Download
			</button>
		</div>
	);
};

export default Navbar;
