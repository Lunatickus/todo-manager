import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEY } from '../services/constants';
import { logout } from '../services/api';

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onLogOut = useCallback(async () => {
    await logout();
    queryClient.setQueryData([QUERY_KEY.user], null);
    navigate('/login');
  }, [navigate, queryClient])

  return onLogOut

}