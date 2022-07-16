import React from "react";
import "./transition.scss";
import img from "../../assets/imag1.png";
import{motion} from 'framer-motion'
function Transition() {
	return (
		<div className="trastison-effect global-padding">
			<motion.div initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} className="tabs">
				<div className="tab">TAB 1</div>
				<div className="tab">TAB 2</div>
				<div className="tab">TAB 3</div>
			</motion.div>
			<motion.div initial={{x:-300,opacity:0}} whileInView={{x:0,opacity:1}} className="transition-details">
				<h3>Tabs with soft transitoning effect</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Accusamus aliquid excepturi ducimus numquam pariatur
					reiciendis unde debitis voluptates culpa quas <br />
					<br />
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Officiis, pariatur!
				</p>
				<div className="btn">
					<button>Download</button>
				</div>
			</motion.div>
			<motion.div initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} className="image">
				<img src={img} alt="img" />
			</motion.div>
		</div>
	);
}

export default Transition;
