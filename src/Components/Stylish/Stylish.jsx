import "./stylish.scss";
import { motion } from "framer-motion";

function Stylish() {
	return (
		<div className="stylish">
			<motion.h1
				initial={{ x: -300, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
			>
				STYLISH AXURE DESIGN
			</motion.h1>
			<motion.p
				initial={{ x: 300, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
			>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
				deserunt!
			</motion.p>
			<motion.div
				initial={{ x: -300, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				className="btn"
			>
				<button>Download</button>
			</motion.div>
		</div>
	);
}

export default Stylish;
