import React from 'react';
import { registerData } from '../../data/RegisterData';
import Form1 from '../../Custom/Form1';

const Register = () => {
  return (
    <>
      <h2>Register</h2>
      <Form1 sourceData={registerData} />
    </>
  );
};

export default Register;
