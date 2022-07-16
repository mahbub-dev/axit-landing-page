import { motion } from "framer-motion";
import "./pricing.scss";
const PriceBox = ({ title, price, type }) => {
	return (
		<>
			<div className="title">
				<h3>{title}</h3>
			</div>
			<div className="price-box">
				<h1>
					<span>$</span>
					{price}
				</h1>
				<h5>{type}</h5>
			</div>
		</>
	);
};
const FeatureItem = ({ feature }) => {
	return (
		<div className="service-feature">
			<p>{feature} </p>
		</div>
	);
};
function Pricing() {
	return (
		<div className="pricing global-padding" id="pricing">
			<div className="pricing-details">
				<h1>PRICING OPTION</h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
			</div>
			<div className="pricing-item">
				<motion.div
					whileHover={{
						boxShadow: "5px 5px 50px 10px var(--desc-color)",
					}}
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					className="item"
				>
					<PriceBox
						title={"Basic"}
						price="0"
						type={"Free for life"}
					/>
					<FeatureItem feature={"1 GB OF SPACE"} />
					<FeatureItem feature={"10 GB OF BANDWIDTH"} />
					<FeatureItem feature={"3 WEBSITES"} />
					<FeatureItem feature={"BASIC CUSTOMIZATION"} />
					<FeatureItem feature={"WORDPRESS INTEGRATION"} />
					<FeatureItem feature={"EMAIL SUPPORT"} />
				</motion.div>
				<motion.div
					initial={{ x: 300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					whileHover={{
						boxShadow: "5px 5px 50px 10px var(--desc-color)",
					}}
					className="item"
				>
					<PriceBox
						title={"Professional"}
						price="19"
						type={"Monthly Payment"}
					/>
					<div className="popular">OUR MOST POPULAR</div>
					<FeatureItem feature={"5 GB OF SPACE"} />
					<FeatureItem feature={"50 GB OF BANDWIDTH"} />
					<FeatureItem feature={"12 WEBSITES"} />
					<FeatureItem feature={"ADVANCED CUSTOMIZATION"} />
					<FeatureItem feature={"WORDPRESS INTEGRATION"} />
					<FeatureItem feature={"EAMIL SUPPORT"} />
				</motion.div>
				<motion.div
					initial={{ x: -300, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					whileHover={{
						boxShadow: "5px 5px 50px 10px var(--desc-color)",
					}}
					className="item"
				>
					<PriceBox
						title={"Enterprise"}
						price="70"
						type={"Monthly Payment"}
					/>
					<FeatureItem feature={"UNLIMITED SPACE SPACE"} />
					<FeatureItem feature={"UNLIMITED BANDWIDTH"} />
					<FeatureItem feature={"100 WEBSITES"} />
					<FeatureItem feature={"ADVANCED CUSTOMIZATION"} />
					<FeatureItem feature={"WORDPRESS INTEGRATION"} />
					<FeatureItem feature={"24/7 CUSTOMER SUPPORT"} />
				</motion.div>
			</div>
		</div>
	);
}

export default Pricing;
