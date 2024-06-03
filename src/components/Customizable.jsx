const Customizable = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="w-full lg:w-1/2 relative flex">
				<div className="flex h-[600px]">
					<img
						src="https://i.ibb.co/72gKbHp/ring.png"
						alt=""
						className="h-[550px]"
					/>
					<img
						src="https://i.ibb.co/cQLjTVw/color.png"
						alt=""
						className="absolute -left-24 h-full"
					/>
					<img
						src="https://i.ibb.co/NW6nbSF/customize.png"
						alt=""
						className="absolute left-40 h-full"
					/>
				</div>
			</div>
			<div className="w-full lg:w-1/2 pl-8">
				<div className="flex items-center gap-x-2">
					<img
						className="rounded-full p-1 text-white"
						src="https://i.ibb.co/KGZ0T2b/star.png"
						alt=""
					/>
					<h1 className="text-3xl font-extrabold">Fully Customizable</h1>
				</div>
				<div>
					<p className="text-gray-500 my-3">
						Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
						In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
						et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
						sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
						suspendisse aliquam.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Customizable;
