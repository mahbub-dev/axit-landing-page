import "./contact.scss";
import { motion } from "framer-motion";

function Contact() {
	return (
		<div className="contact global-padding" id="contact">
			<div className="contact-detail">
				<h1>CONTACT US</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<form action="#">
				<div className="contact-form">
					<motion.div
						initial={{ x: -300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						className="contact-input"
					>
						<input type="text" name="name" placeholder="Name" />
						<input type="email" name="email" placeholder="Email" />
						<input
							type="text"
							name="subject"
							placeholder="Subject"
						/>
					</motion.div>
					<motion.div
						initial={{ x: 300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						className="msg-input"
					>
						<textarea
							placeholder="Message"
							name="message"
							cols="29"
							rows="10"
						></textarea>
					</motion.div>
				</div>
				<motion.div
					initial={{ x: 300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					className="btn"
				>
					<button type="submint">Send Messages</button>
				</motion.div>
			</form>
		</div>
	);
}

export default Contact;
