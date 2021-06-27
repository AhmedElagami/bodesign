import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import { FiMenu } from 'react-icons/fi';

const Header = (props) => {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [isDropMenuShown, setDropMenuShown] = useState(false);
	useEffect(() => {
		const handleScroll = event => {
			const scrollTop = event.target.documentElement.scrollTop;
			setIsHeaderFixed(scrollTop !== 0);
		};
		if (document) document.addEventListener("scroll", handleScroll);
		return () => {
			if (document) document.removeEventListener("scroll", handleScroll);
		};
	}, [setIsHeaderFixed]);
	const classList = "header__container " + (isHeaderFixed ? " header__container--fixed" : "");
	return (
		<header className="header">
			<div className={classList}>

				<a className="header__logo-container" href="/">
					<Img fluid={props.logo} className="header__logo" alt="BO design | Grafikai tervezés" />
				</a>
				<nav className="header__navbar">
					<ul className="header__list">
						<a className="header__link" href="#home">
							<li className="header__item">
								Home
					</li>
						</a>
						<a className="header__link" href="#rolam">
							<li className="header__item">
								Rólam
					</li>
						</a>
						<a className="header__link" href="#szolgaltatasok">
							<li className="header__item">
								Szolgáltatások
					</li>
						</a>
						<a className="header__link" href="#portfolio">
							<li className="header__item">
								Portfólió
					</li>
						</a>
						{/* <a className="header__link" href="/prices">
							<li className="header__item">
								Arak
					</li>
						</a> */}
						<a className="header__link" href="#kapcsolat">
							<li className="header__item">
								Kapcsolat
					</li>
						</a>
					</ul>
				</nav>
			</div>
			<div className="header-mobile">
				<div>
					<a className="header__logo-container" href="/">
						<Img fluid={props.logo} className="header__logo" alt="BO design | Grafikai tervezés" />
					</a>
					<FiMenu onClick={() => setDropMenuShown(prevShown => !prevShown)} className="header-mobile__btn-toggle">
					</FiMenu>
				</div>
				<nav className={"header-mobile__nav" + (isDropMenuShown ? " shown" : "")}>
					<ul className="header-mobile__list">
						<li className="header-mobile__item"><a href="/#home" className="header-mobile__link">Home</a></li>
						<li className="header-mobile__item"><a href="/#rolam" className="header-mobile__link">Rólam</a></li>
						<li className="header-mobile__item"><a href="/#szolgaltatasok" className="header-mobile__link">Szolgáltatások</a></li>
						<li className="header-mobile__item"><a href="/#portfolio" className="header-mobile__link">Portfólió</a></li>
						{/* <li className="header-mobile__item"><a href="/prices" className="header-mobile__link">Árak</a></li> */}
						<li className="header-mobile__item"><a href="/#kapcsolat" className="header-mobile__link">Kapcsolat</a></li>
					</ul>
				</nav></div>
		</header >
	);
}

export default Header;