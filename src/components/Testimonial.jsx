const Testimonial = () => {
	return (
		<div>
			<div className="text-center">
				<h3>Testimonial</h3>
				<h1 className="text-4xl font-bold">
					what our users <br /> say about us?
				</h1>
			</div>
			<div className="lg:flex items-center justify-between mt-20">
				<div className="w-full lg:w-1/2 relative flex">
					<img src="https://i.ibb.co/6tKxgMG/scat-Color.png" alt="" />
					<img
						className="absolute -top-14"
						src="https://i.ibb.co/Q8cGgVZ/users.png"
						alt=""
					/>
				</div>
				<div className="w-full lg:w-1/2">
					<h1 className="text-2xl font-extrabold">
						The Best Financial Accounting App Ever!
					</h1>
					<p className="text-gray-500 my-3 text-justify">
						“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
						ultricies. In ultrices malesuada elit mauris etiam odio. Duis
						tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
						diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
						neque lorem sapien, suspendisse aliquam.”
					</p>
					<div className="flex flex-wrap items-center gap-x-1">
						<img
							className="h-16 w-16"
							src="https://i.ibb.co/FbXD29P/p1.png"
							alt=""
						/>
						<img
							className="h-12 w-12 brightness-50"
							src="https://i.ibb.co/qxmTzqG/p2.png"
							alt=""
						/>
						<img
							className="h-12 w-12 brightness-50"
							src="https://i.ibb.co/FxBzdH4/p3.png"
							alt=""
						/>
						<img
							className="h-12 w-12 brightness-50"
							src="https://i.ibb.co/gr1190v/p4.png"
							alt=""
						/>
						<img
							className="h-12 w-12 brightness-50"
							src="https://i.ibb.co/sKYmb3h/p5.png"
							alt=""
						/>
					</div>
					<h3 className="font-extrabold text-black text-2xl mt-5">
						Nick Jonas
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
