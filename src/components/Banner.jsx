import firstPhone from "../assets/first.png";
import secondPhone from "../assets/second.png";
import thirdPhone from "../assets/first.png";

const Banner = () => {
	return (
		<div className="lg:flex lg:justify-between">
			<div className="lg:w-1/2">
				<img
					className="relative -left-12 -top-20"
					src="https://i.ibb.co/6tKxgMG/scat-Color.png"
					alt=""
				/>
				<div className="absolute top-48 space-y-5">
					<h1 className="text-5xl font-bold">
						Make The Best <br />
						Financial Decisions
					</h1>
					<p className="text-gray-500 mt-0">
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						<br />
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
					<div className="flex items-center gap-x-7">
						<p>
							<button className="flex items-center gap-x-2 justify-center bg-black w-[180px] h-[50px] rounded text-[#FFFFFF] hover:bg-[#FF5555] duration-700">
								Get Started
								<img src="https://i.ibb.co/s9N1wCL/direction.png" alt="play" />
							</button>
						</p>
						<p className="flex items-center gap-x-2 justify-center">
							<img
								className="hover:bg-[#FF5555] rounded-full hover:animate-spin cursor-pointer"
								src="https://i.ibb.co/4MJy5Bc/play.png"
								alt="play"
							/>
							watch Video
						</p>
					</div>
					<div className="relative">
						<img
							className="absolute top-20 left-32"
							src="https://i.ibb.co/FKSJJXz/blackstar.png"
							alt=""
						/>
						<img src="https://i.ibb.co/RCRZcjC/zigzag.png" alt="" />
					</div>
				</div>
			</div>
			<div className="lg:w-1/2 relative">
				<img
					src={firstPhone}
					alt=""
					className="absolute top-40 left-48 lg:h-[600px]"
				/>
				<img
					src={secondPhone}
					alt=""
					className="absolute top-20 left-20 lg:h-[600px]"
				/>
				<img
					src={thirdPhone}
					alt=""
					className="absolute -left-5 lg:h-[600px]"
				/>
				<img
					src="https://i.ibb.co/72gKbHp/ring.png"
					alt=""
					className="lg:h-[600px]"
				/>
			</div>
		</div>
	);
};

export default Banner;
