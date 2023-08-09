import React from 'react';
import { Navigate } from 'react-router-dom';
import { verify } from '../api/auth';

interface AuthGuardProps {
  redirectTo: string;
  element: React.ReactElement;
}

const AuthenticationGuard = ({ redirectTo, element }: AuthGuardProps) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      try {
        await verify();

        setIsAuthenticated(true);
      } catch (e) {
        console.log('error', e);
        console.error('errorme', e);
        setIsAuthenticated(false);
      } finally {
        setCompleted(true);
      }
    })();
  }, [redirectTo]);

  return completed ? isAuthenticated ? element : <Navigate to={redirectTo} /> : null;
};

export default AuthenticationGuard;
