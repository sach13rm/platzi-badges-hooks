import React from 'react';

import './BadgesList.css';

const BadgesList = ({ badges }) => {
	if (badges.length === 0) {
		return (
			<div>
				<h3>No badges where found</h3>
			</div>
		);
	}

	return (
		<div className="BadgesList">
			<ul className="list-unstyled">
				{badges.map((badge) => {
					return (
						<li key={badge.id} className="BadgesListItem">
							<img src={badge.avatarUrl} className="BadgesListItem__avatar" alt="Avatar"></img>
							<div>
								<strong>
									{badge.firstName} {badge.lastName}
								</strong>
								<br />@{badge.twitter}
								<br />
								{badge.jobTitle}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BadgesList;
