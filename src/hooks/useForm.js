import { useState } from 'react';

const useForm = ({
  firstName = '',
  lastName = '',
  jobTitle = '',
  twitter = '',
  email = '',
}) => {
  const [form, setForm] = useState({
    firstName,
    lastName,
    jobTitle,
    twitter,
    email,
  });
  return [form, setForm];
};

export default useForm;
