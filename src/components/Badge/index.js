import React from 'react';

import './Badge.css';
import confLogo from '../../assets/images/badge-header.svg';

const Badge = ({ firstName, lastName, jobTitle, twitter, avatarUrl }) => {
  return (
    <div className='Badge'>
      <div className='Badge__header'>
        <img src={confLogo} alt='Logo de la conferencia' />
      </div>
      <div className='Badge__section-name'>
        <img className='Badge__avatar' src={avatarUrl} alt='Avatar' />
        <h1>
          {firstName} <br />
          {lastName}
        </h1>
      </div>
      <div className='Badge__section-info'>
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
      </div>
      <div className='Badge__footer'>Platziconf</div>
    </div>
  );
};

export default Badge;
