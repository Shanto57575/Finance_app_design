import Advantages from "./components/Advantages";
import Banner from "./components/Banner";
import Customizable from "./components/Customizable";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

const App = () => {
	return (
		<div className="container lg:w-[1090px] mx-auto font-clash">
			<Navbar />
			<Banner />
			<Features />
			<Advantages />
			<Customizable />
			<Testimonial />
			<Faq />
			<Download />
		</div>
	);
};

export default App;
