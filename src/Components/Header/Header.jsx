import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { motion } from "framer-motion";

const Links = ({ styles }) => {
	return (
		<>
			<p className={styles}>
				<a href="#feature">Features</a>{" "}
			</p>
			<p className={styles}>
				<a href="#">About</a>
			</p>
			<p className={styles}>
				<a href="#pricing">Pricing</a>
			</p>
			<p className={styles}>
				<a href="#reviews">Reviews</a>
			</p>
			<p className={styles}>
				<a href="#contact">Contact</a>
			</p>
		</>
	);
};

function Header() {
	const [toggleBar, setToggleBar] = useState(false);
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};
	const [toggleStyle, setToggleStyle] = useState({
		r: "500px",
		position: "relative",
		opacity: "1",
	});
	const toggle = () => {
		if (!toggleBar) {
			setToggleStyle({ r: "0px", position: "fixed", opacity: ".8" });
			setToggleBar(true);
		} else {
			setToggleStyle({ r: "500px", position: "relative", opacity: "1" });
			setToggleBar(false);
		}
	};
	return (
		<div className="header" style={{ position: toggleStyle.position }}>
			{/* navbarr  */}
			<nav className="nav">
				<div className="logo">
					<p>
						AX<span>IT</span>
					</p>
				</div>
				<div className="nav-links">
					<Links styles="p" />
				</div>
				<div className="bar-icon" onClick={toggle}>
					{!toggleBar ? <FaBars /> : <ImCross />}
				</div>
				<motion.div
					// style={{ transform: `translateX(${toggleStyle.r}) ` }}
					className="toggle-bar"
					animate={toggleBar ? "open" : "closed"}
					variants={variants}
				>
					<Links styles="p" />
				</motion.div>
			</nav>
			<div className="header-bg">
				<div className="header-details">
					<h1 className="logo-text">
						AX<span>IT</span>
					</h1>
					<motion.h2
						initial={
							window.innerWidth < 500 ? { x: -300 } : { x: -500 }
						}
						whileInView={{ x: 0 }}
						className="header-title"
					>
						MORDERN AXURE TEMPLATE <br /> FOR BEAUTIFUL PROTOTYPES
					</motion.h2>
					<motion.p
						initial={{ x: 300, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						className="header-description"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ab odio perferendis pariatur nam debitis dignissimos
						fuga modi tenetur veritatis labore.
					</motion.p>
					<motion.div
						initial={{ x: 300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						className="header-btn"
					>
						<button type="download">Download</button>
					</motion.div>
				</div>
				<motion.div
					initial={{ x: 300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					className="header-form"
				>
					<div className="form">
						<form action="#">
							<h1>
								Try Your <span>FREE</span> Trial Today
							</h1>
							<div className="header-form-input">
								<input
									type="text"
									name="name"
									placeholder="Name"
								/>
							</div>
							<div className="header-form-input">
								<input
									type="eamil"
									name="email"
									placeholder="Email"
								/>
							</div>
							<div className="header-form-input">
								<input
									type="password"
									name="password"
									placeholder="Password"
								/>
							</div>
							<div className="header-form-btn">
								<button>Get Started</button>
							</div>
						</form>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Header;
