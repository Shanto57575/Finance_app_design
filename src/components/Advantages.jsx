import React from "react";
import phone from "../assets/phon.png";

const Advantages = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<div className="w-full lg:w-1/2 order-2 lg:order-1">
				<h3 className="text-[#FF5555] hover:underline duration-700 cursor-pointer hover:font-bold">
					ADVANTAGES
				</h3>
				<h1 className="text-3xl font-extrabold">why choose Uifry?</h1>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/t3Wbf6d/notification.png" alt="" />
						<span>Clever Notifications</span>
					</p>
					<p className="text-gray-500 my-3 text-justify">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
			</div>
			<div className="w-full lg:w-1/2 relative flex order-1 lg:order-2 mb-10 lg:mb-0 mx-auto">
				<div className="flex h-[300px] lg:h-[600px]">
					<img
						src="https://i.ibb.co/72gKbHp/ring.png"
						alt=""
						className="h-[300px] top-20 lg:top-0 lg:h-[550px]"
					/>
					<img
						src="https://i.ibb.co/6tKxgMG/scat-Color.png"
						alt=""
						className="hidden lg:block absolute -left-24 h-full"
					/>
					<img
						src={phone}
						alt=""
						className="absolute left-20 -top-5 lg:top-0 bottom-0 lg:left-40 h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
