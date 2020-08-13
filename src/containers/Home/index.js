import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/platziconf-logo.svg';
import Astronauts from '../../assets/images/astronauts.svg';
import './Home.css';

const Home = () => {
	return (
		<div className="Home__container">
			<div className="Home__container--logo">
				<img src={Logo} alt="Logo" />
				<h1>PRINT YOUR BADGES</h1>
				<p>The easiest way to manage your conference</p>
				<Link to="/badges" className="btn btn-primary" type="">
					Start Now
				</Link>
			</div>
			<div className="Home__container--astronauts">
				<img src={Astronauts} alt="Astronauts" />
			</div>
		</div>
	);
};

export default Home;
