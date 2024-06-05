import Advantages from "./components/Advantages";
import Banner from "./components/Banner";
import Customizable from "./components/Customizable";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

const App = () => {
	return (
		<div className="container max-w-6xl mx-auto font-clash px-3">
			<Navbar />
			<Banner />
			<Features />
			<Advantages />
			<Customizable />
			<Testimonial />
			<Faq />
			<Download />
			<Footer />
		</div>
	);
};

export default App;
