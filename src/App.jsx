import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<div className="max-w-7xl mx-auto pt-20 px-6">
				<HeroSection />
				<FeatureSection />
				<Workflow />
				<Pricing />
				<Testimonials />
				<Footer />
			</div>
		</>
	);
}

export default App;
