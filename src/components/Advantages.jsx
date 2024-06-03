import React from "react";
import phone from "../assets/phon.png";

const Advantages = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="w-full lg:w-1/2 pl-8">
				<h3 className="text-[#FF5555]">ADVANTAGES</h3>
				<h1 className="text-3xl font-extrabold">why choose Uifry?</h1>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/t3Wbf6d/notification.png" alt="" />
						<span>Clever Notifications</span>
					</p>
					<p className="text-gray-500 my-3">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
			</div>
			<div className="w-full lg:w-1/2 relative flex">
				<div className="flex h-[600px]">
					<img
						src="https://i.ibb.co/72gKbHp/ring.png"
						alt=""
						className="h-[550px]"
					/>
					<img
						src="https://ibb.co/kX1tcvJ"
						alt=""
						className="absolute -left-24 h-full"
					/>
					<img src={phone} alt="" className="absolute left-40 h-full" />
				</div>
			</div>
		</div>
	);
};

export default Advantages;
