import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import Badge from '../../components/Badge';
import BadgeForm from '../../components/BadgeForm';

import header from '../../assets/images/badge-header.svg';
import './BadgeNew.css';

const BadgeNew = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    twitter: '',
    email: '',
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Navbar />
      <div className='BadgeNew__hero'>
        <img className='img-fluid' src={header} alt='Logo'></img>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Badge
              firstName={form.firstName}
              lastName={form.lastName}
              jobTitle={form.jobTitle}
              twitter={form.twitter}
              avatarUrl='https://www.gravatar.com/avatar?d=identicon'
            />
          </div>
          <div className='col-6'>
            <BadgeForm handleChange={handleChange} formValues={form} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeNew;
