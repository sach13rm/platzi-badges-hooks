import React, { useState, Fragment } from 'react';

import Badge from '../../components/Badge';
import BadgeForm from '../../components/BadgeForm';
import api from '../../api';
import md5 from 'md5';

import header from '../../assets/images/platziconf-logo.svg';
import './BadgeNew.css';

const BadgeNew = () => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		jobTitle: '',
		twitter: '',
		email: '',
		avatarUrl: '',
	});
	const [status, setStatus] = useState({
		loading: true,
		error: null,
	});
	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
		if (event.target.name === 'email') {
			setForm({
				...form,
				[event.target.name]: event.target.value,
				avatarUrl: `https://www.gravatar.com/avatar/${md5(event.target.value)}`,
			});
		}
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus({
			loading: true,
			error: null,
		});
		try {
			await api.badges.create(form);
			setStatus({
				...status,
				loading: false,
			});
		} catch (error) {
			setStatus({
				loading: false,
				error: error,
			});
		}
	};
	return (
		<>
			<div className="BadgeNew__hero">
				<img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"></img>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<Badge
							firstName={form.firstName || 'FIRST_NAME'}
							lastName={form.lastName || 'LAST_NAME'}
							jobTitle={form.jobTitle || 'JOB_TITLE'}
							twitter={form.twitter || 'twitter'}
							avatarUrl={form.email}
						/>
					</div>
					<div className="col-6">
						<BadgeForm handleChange={handleChange} onSubmit={handleSubmit} formValues={form} />
					</div>
				</div>
			</div>
		</>
	);
};

export default BadgeNew;
