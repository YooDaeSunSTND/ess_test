import React from 'react';
import Link from 'next/link';
import LoginForm from 'components/authentication/LoginForm';

import AuthCardLayout from 'layouts/AuthCardLayout';

const Login = () => {
  return (
    <AuthCardLayout
      leftSideContent={
        <p className="text-white">
          Don't have an account?
          <br />
          <Link
            className="text-white text-decoration-underline"
            href="/authentication/card/register"
          >
            Get started!
          </Link>
        </p>
      }
    >
      <h3>Account Login</h3>
      <LoginForm layout="card" hasLabel />
    </AuthCardLayout>
  );
};

export default Login;
