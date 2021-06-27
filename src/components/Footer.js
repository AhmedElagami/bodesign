import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import Img from 'gatsby-image';
import { propTypes } from 'react-markdown';
const Footer = (props) => {
	return (
		<footer id="kapcsolat" className="footer">
			<Img fluid={props.logo} className="footer__logo" alt="LOGO" />
			<h3 className="footer__heading">KAPCSOLAT</h3>
			<p className="footer__text">BO design | Grafikai tervezés | Budapest <br /> info@bodesign.hu

</p>
			<p className="footer__text">Kövesd legújabb munkáimat!</p>
			<div className="footer__icons">
				<a className="footer__facebook" href="https://www.facebook.com"><FaFacebookSquare /></a>
				<a className="footer__instagram" href="https://www.instagram.com"><FaInstagramSquare /></a>
			</div>
			<a className="footer__user-agreement" href="https://bodesign.hu/wp-content/uploads/2020/07/bodesign_2_mellklet_aksz-2.pdf">Adatvédelmi tájékoztató</a>
			{/* <FaFacebookSquare></FaFacebookSquare>
			<FaInstagramSquare></FaInstagramSquare> */}
		</footer>
	);
}

export default Footer;