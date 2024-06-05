import logo from "../assets/Framelogo.png";
import webname from "../assets/webname.png";

const Footer = () => {
	return (
		<footer className="py-10 lg:py-20">
			<div className="container mx-auto px-4 lg:px-0">
				<div className="lg:flex items-center justify-between gap-12 lg:gap-5">
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<img src={logo} alt="logo" className="h-8" />
							<img src={webname} alt="name" className="h-8" />
						</div>
						<div className="flex items-center gap-2">
							<img src={logo} alt="logo" className="h-6" />
							<a href="mailto:Help@Fybrix.com">Help@Fybrix.com</a>
						</div>
						<div className="flex items-center gap-2">
							<img src={logo} alt="logo" className="h-6" />
							<a href="tel:+12345678908">+12 345 678 908</a>
						</div>
					</div>

					<div className="space-y-4 col-span-1">
						<h2 className="text-xl font-bold mt-8">Links</h2>
						<ul className="space-y-2">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Bookings</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4 col-span-1">
						<h2 className="text-xl font-bold">Legal</h2>
						<ul className="space-y-2">
							<li>
								<a href="#">Terms Of Use</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Cookie Policy</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4 col-span-1">
						<h2 className="text-xl font-bold">Product</h2>
						<ul className="space-y-2">
							<li>
								<a href="#">Take Tour</a>
							</li>
							<li>
								<a href="#">Live Chat</a>
							</li>
							<li>
								<a href="#">Reviews</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4 col-span-1">
						<h2 className="text-xl font-bold">Newsletter</h2>
						<p>Stay Up To Date</p>
						<div className="relative">
							<input
								className="border bg-white p-4 rounded w-full h-16"
								type="email"
								name="email"
								id="email"
								placeholder="Your email"
							/>
							<button className="bg-black absolute right-0 top-0 mx-2 my-2 px-4 h-12 rounded text-white hover:bg-red-500 transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
