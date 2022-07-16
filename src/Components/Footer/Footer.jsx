import "./Footer.scss";
import {
	FaFacebookF,
	FaTwitter,
	FaPinterest,
	FaGithub,
	FaGooglePlusG,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa";
function Footer() {
	return (
		<div className="footer">
			<div className="footer-links">
				<div className="icon">
					<FaFacebookF />
				</div>
				<div className="icon">
					<FaTwitter />
				</div>
				<div className="icon">
					<FaPinterest />
				</div>
				<div className="icon">
					<FaGithub />
				</div>
				<div className="icon">
					<FaGooglePlusG />
				</div>
				<div className="icon">
					<FaLinkedin />
				</div>
				<div className="icon">
					<FaInstagram />
				</div>
			</div>
			<p className="copy">&copy; 2015 Axure theme</p>
		</div>
	);
}

export default Footer;
