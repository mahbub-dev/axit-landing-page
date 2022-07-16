import "./social.scss";

import {
	FaFacebookF,
	FaTwitter,
	FaPinterest,
	FaGithub,
	FaGooglePlusG,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa";
function Social() {
	return (
		<>
			<div className="social global-padding">
				<div className="social-links">
					<div className="details">
						<h4>Social Media</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur, <br />{" "}
							adipisicing elit. Dicta, incidunt.
						</p>
					</div>
					<div className="links">
						<div className="link">
							<FaFacebookF />
						</div>
						<div className="link">
							<FaTwitter />
						</div>
						<div className="link">
							<FaPinterest />
						</div>
						<div className="link">
							<FaGithub />
						</div>
						<div className="link">
							<FaGooglePlusG />
						</div>
						<div className="link">
							<FaLinkedin />
						</div>
						<div className="link">
							<FaInstagram />
						</div>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Social;
