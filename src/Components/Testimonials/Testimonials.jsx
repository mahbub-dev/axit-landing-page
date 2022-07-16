import "./testimonials.scss";
import img from "../../assets/testimonials.png";
import { motion } from "framer-motion";

const Item = ({ img, name, profession, initial }) => {
	return (
		<motion.div
			initial={{ x: initial, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			className="item"
		>
			<div className="desc">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Perspiciatis nulla explicabo obcaecati eveniet maiores
					reprehenderit laboriosam cumque fuga alias adipisci.
				</p>
			</div>
			<div className="profile">
				<div className="img">
					<img src={img} alt="img" />
				</div>
				<div className="name-and-profession">
					<h4>{name}</h4>
					<p>{profession}</p>
				</div>
			</div>
		</motion.div>
	);
};

function Testimonials() {
	return (
		<div className="testimonials global-padding" id="reviews">
			<div className="testimonials-details">
				<h1>WHAT OUR CUSTOMERS ARE SAYING</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className="testimonials-item">
				<Item
					initial={300}
					img={img}
					name={"Jeremy h."}
					profession="Manager"
				/>
				<Item
					initial={-300}
					img={img}
					name={"Jonh S."}
					profession="Freelancer"
				/>
				<Item
					initial={300}
					img={img}
					name={"Susan W"}
					profession="Photographer"
				/>
			</div>
		</div>
	);
}

export default Testimonials;
