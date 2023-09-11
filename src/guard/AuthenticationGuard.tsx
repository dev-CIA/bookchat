import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { getAuthQuery } from '../utils';

interface AuthGuardProps {
  redirectTo: string;
  element: React.ReactElement;
}

const AuthenticationGuard = ({ redirectTo, element }: AuthGuardProps) => {
  const { isFetched, error } = useQuery(getAuthQuery());

  return isFetched ? error === null ? element : <Navigate to={redirectTo} /> : null;
};

export default AuthenticationGuard;
