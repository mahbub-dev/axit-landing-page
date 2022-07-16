import "./App.scss";
import {
	Header,
	Social,
	Transition,
	Sublist,
	Standard,
	Specification,
	Pricing,
	Testimonials,
	Stylish,
	Contact,
	Footer
} from "./Components/index";
function App() {
	return (
		<div className="App">
			<Header />
			<Social />
			<Transition />
			<Sublist />
			<Standard />
			<Specification />
			<Pricing />
			<Testimonials />
			<Stylish />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
