import phone from "../assets/straightPhone.png";

const Features = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-between mt-[600px] lg:mt-48">
			<div className="w-full lg:w-1/2 relative flex justify-center mb-10 lg:mb-0">
				<div className="flex h-[400px] lg:h-[600px]">
					<img
						src="https://i.ibb.co/72gKbHp/ring.png"
						alt=""
						className="absolute -left-5 right-0 h-[300px] lg:h-[550px]"
					/>
					<img
						src="https://i.ibb.co/6tKxgMG/scat-Color.png"
						alt=""
						className="hidden lg:block lg:-left-20"
					/>
					<img
						src={phone}
						alt=""
						className="absolute left-0 -top-8 lg:top-0 bottom-0 lg:left-40 h-full"
					/>
				</div>
			</div>
			<div className="w-full lg:w-1/2 text-sm md:text-base">
				<h3 className="text-[#FF5555]">Features</h3>
				<h1 className="text-3xl font-extrabold">uifry premium</h1>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/KGZ0T2b/star.png" alt="" />
						<span>Budgeting Intervals</span>
					</p>
					<p className="text-gray-500 my-3 text-justify">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/pdwGqgN/circular.png" alt="" />
						<span>Budgeting Intervals</span>
					</p>
					<p className="text-gray-500 my-5 text-justify">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/KX0wH2J/cube.png" alt="" />
						<span>Budgeting Intervals</span>
					</p>
					<p className="text-gray-500 my-5 text-justify">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
