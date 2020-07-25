import React, { useState } from 'react';
import BadgesList from '../../components/BadgesList';
import Navbar from '../../components/Navbar';

import confLogo from '../../assets/images/badge-header.svg';
import './Badges.css';

const Badges = () => {
  const [badges, setBadges] = useState({
    data: [
      {
        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        firstName: 'Freda',
        lastName: 'Grady',
        email: 'Leann_Berge@gmail.com',
        jobTitle: 'Legacy Brand Director',
        twitter: 'FredaGrady22221-7573',
        avatarUrl:
          'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
      },
      {
        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        firstName: 'Major',
        lastName: 'Rodriguez',
        email: 'Ilene66@hotmail.com',
        jobTitle: 'Human Research Architect',
        twitter: 'MajorRodriguez61545',
        avatarUrl:
          'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
      },
      {
        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        firstName: 'Daphney',
        lastName: 'Torphy',
        email: 'Ron61@hotmail.com',
        jobTitle: 'National Markets Officer',
        twitter: 'DaphneyTorphy96105',
        avatarUrl:
          'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
      },
      {
        id: 'a9748581-dfdc-4a78-930d-5205a2ccef48',
        firstName: 'Tatyana',
        lastName: 'Von',
        email: 'Herminio.Schmeler@hotmail.com',
        jobTitle: 'Central Branding Representative',
        twitter: 'TatyanaVon35871-3686',
        avatarUrl:
          'https://www.gravatar.com/avatar/98c382edd93414c1649b9db866000f97?d=identicon',
      },
    ],
  });

  return (
    <div>
      <Navbar />
      <div className='Badges'>
        <div className='Badges__hero'>
          <div className='Badges__container'>
            <img
              className='Badges__conf-logo'
              src={confLogo}
              alt='Conf Logo'
            ></img>
          </div>
        </div>
      </div>
      <div className='Badges__container'>
        <div className='Badges__buttons'>
          <a href='#' className='btn btn-primary'>
            New Badge
          </a>
        </div>

        <BadgesList badges={badges.data} />
      </div>
    </div>
  );
};

export default Badges;
