const Customizable = () => {
	return (
		<div className="lg:flex items-center justify-between md:flex-row md:items-center md:justify-start">
			<div className="w-full md:w-1/2 relative flex">
				<div className="flex h-screen">
					<img
						src="https://i.ibb.co/72gKbHp/ring.png"
						alt=""
						className="h-96 lg:h-full"
					/>
					<img
						src="https://i.ibb.co/6tKxgMG/scat-Color.png"
						alt=""
						className="hidden lg:block absolute lg:-left-24 h-full"
					/>
					<img
						src="https://i.ibb.co/NW6nbSF/customize.png"
						alt=""
						className="absolute left-5 lg:left-40 h-[400px] lg:h-full"
					/>
				</div>
			</div>
			<div className="w-full md:w-1/2 md:pl-0">
				<div className="flex items-center gap-x-2">
					<img
						className="rounded-full p-1 text-white"
						src="https://i.ibb.co/KGZ0T2b/star.png"
						alt=""
					/>
					<h1 className="text-3xl font-extrabold">Fully Customizable</h1>
				</div>
				<div>
					<p className="text-gray-500 my-3 text-justify">
						A rcu at dictum sapien, mollis. Vulputate sit id accumsan,
						ultricies. In ultrices malesuada elit mauris etiam odio. Duis
						tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
						diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
						neque lorem sapien, suspendisse aliquam.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Customizable;
