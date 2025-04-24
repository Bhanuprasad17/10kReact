import React from 'react';
import { loginData } from '../../data/LoginData';
import Form1 from '../../Custom/Form1';

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <Form1 sourceData={loginData} />
    </>
  );
};

export default Login;
