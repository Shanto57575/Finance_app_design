import phone from "../assets/straightPhone.png";

const Features = () => {
	return (
		<div className="flex items-center justify-between mt-48">
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
						className="absolute -left-20 h-full"
					/>
					<img src={phone} alt="" className="absolute left-40 h-full" />
				</div>
			</div>
			<div className="w-full lg:w-1/2 pl-8">
				<h3 className="text-[#FF5555]">Features</h3>
				<h1 className="text-3xl font-extrabold">uifry premium</h1>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/KGZ0T2b/star.png" alt="" />
						<span>Budgeting Intervals</span>
					</p>
					<p className="text-gray-500 my-3">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/pdwGqgN/circular.png" alt="" />
						<span>Budgeting Intervals</span>
					</p>
					<p className="text-gray-500 my-5">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
				<div>
					<p className="flex items-center gap-x-2 my-3">
						<img src="https://i.ibb.co/KX0wH2J/cube.png" alt="" />
						<span>Budgeting Intervals</span>
					</p>
					<p className="text-gray-500 my-5">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
