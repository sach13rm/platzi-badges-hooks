import React from 'react';

import './BadgesList.css';

const BadgesList = ({ badges }) => {
  return (
    <div className='BadgesList'>
      <ul className='list-unstyled'>
        {badges.map((badge) => {
          return (
            <li key={badge.id} className='BadgesListItem'>
              <img
                src={badge.avatarUrl}
                className='BadgesListItem__avatar'
                alt='Avatar'
              ></img>
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
