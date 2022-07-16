import "./specification.scss";
import { FaLightbulb, FaKeyboard, FaPaste } from "react-icons/fa";
import { motion } from "framer-motion";

const Item = ({ icon, title, desc, initial }) => {
	return (
		<motion.div
			initial={{ x: initial, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			className="item"
		>
			<div className="icon">{icon}</div>
			<h3>{title}</h3>
			<p>{desc}</p>
		</motion.div>
	);
};

function Specification() {
	return (
		<div className="specification" id="feature">
			<div className="title">
				<h1>WHY THIS IS AWESOME</h1>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			</div>
			<div className="specification-item">
				<Item
					initial={-300}
					icon={<FaLightbulb />}
					title="Thoughtful Design"
					desc={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque natus hic, maxime consectetur veniam qui."
					}
				/>
				<Item
					initial={300}
					icon={<FaKeyboard />}
					title="Well Crafted"
					desc={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque natus hic, maxime consectetur veniam qui."
					}
				/>
				<Item
					initial={-300}
					icon={<FaPaste />}
					title="Easy to Customize"
					desc={
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque natus hic, maxime consectetur veniam qui."
					}
				/>
			</div>
		</div>
	);
}

export default Specification;
