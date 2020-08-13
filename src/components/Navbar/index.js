import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="container-fluid">
				<Link to="/" className="Navbar__brand">
					<img className="Navbar__brand-logo" src={logo} alt="Logo"></img>
					<span className="font-weight-light ">Platzi</span>
					<span className="font-weight-bold">Conf</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
