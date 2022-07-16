import "../Sublist/sublist.scss";
import "./standard.scss";
import {motion} from 'framer-motion'
import img from "../../assets/imag3.png";
function Standard() {
	return (
		<div className="sublist standard global-padding">
			<motion.div initial={{x:-300,opacity:0}} whileInView={{x:0,opacity:1}} className="sublist-details standard-details">
				<h3>Standard Picture Section</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Impedit ut iure quasi dolorem ex aperiam, officiis odio
					cupiditate reprehenderit quidem eaque culpa error! Explicabo
					architecto nihil <br />
					<br /> vel impedit corporis, quibusdam maxime illo voluptas
					laudantium! Ratione eum a similique corrupti
				</p>
			</motion.div>
			<motion.div initial={{x:300,opacity:0}} whileInView={{x:0,opacity:1}} className="sublist-img">
				<img src={img} alt="img" />
			</motion.div>
		</div>
	);
}

export default Standard;
