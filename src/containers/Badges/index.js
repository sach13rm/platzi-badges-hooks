import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import BadgesList from '../../components/BadgesList';
import PageLoading from '../../components/PageLoading';
import PageError from '../../components/PageError';
// import Skeleton from 'react-loading-skeleton';

import api from '../../api';

import confLogo from '../../assets/images/badge-header.svg';
import './Badges.css';

const Badges = () => {
	const [badges, setBadges] = useState({
		loading: true,
		error: null,
		data: undefined,
	});

	// useEffect(() => {
	// 	console.log('3. useEffect');
	// 	const timeOutId = setTimeout(() => {
	// 		setBadges({
	// 			...badges,
	// 			data: [],
	// 		});
	// 	}, 3000);

	// 	return () => {
	// 		console.log('ComponentWillUnmount');
	// 		clearTimeout(timeOutId);
	// 	};
	// }, []);

	const fetchData = async () => {
		setBadges({
			...badges,
			loading: true,
			error: null,
		});
		try {
			const data = await api.badges.list();
			setBadges({
				...badges,
				loading: false,
				data: data,
			});
		} catch (error) {
			setBadges({
				...badges,
				loading: false,
				error: error,
			});
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (badges.loading === true) {
		return <PageLoading />;
	}
	if (badges.error) {
		return <PageError error={badges.error} />;
	}
	return (
		<>
			<div className="Badges">
				<div className="Badges__hero">
					<div className="Badges__container">
						<img className="Badges__conf-logo" src={confLogo} alt="Conf Logo"></img>
					</div>
				</div>
			</div>
			<div className="Badges__container">
				<div className="Badges__buttons">
					<Link to="/badges/new" className="btn btn-primary">
						New Badge
					</Link>
				</div>

				<BadgesList badges={badges.data} />
			</div>
		</>
	);
};

export default Badges;
