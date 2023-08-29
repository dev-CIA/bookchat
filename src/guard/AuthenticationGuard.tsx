import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { verify } from '../api/auth';

interface AuthGuardProps {
  redirectTo: string;
  element: React.ReactElement;
}

const AuthenticationGuard = ({ redirectTo, element }: AuthGuardProps) => {
  const { isFetched, error } = useQuery({
    queryKey: ['auth'],
    queryFn: verify,
    retry: false,
    staleTime: 1000,
  });

  return isFetched ? error === null ? element : <Navigate to={redirectTo} /> : null;
};

export default AuthenticationGuard;
