import React from 'react'

import Header from './Header';
import Footer from './Footer';

import "../styles/main.scss";

const Layout = (props) => {
	return (
		<div className="container">
			<Header logo={props.logo}></Header>
			{props.children}
			<Footer logo={props.logo}></Footer>
		</div>
	);
}

export default Layout;