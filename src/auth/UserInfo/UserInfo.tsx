import React from 'react';
import { useUserInfoQuery } from './api/useUserInfoQuery';

export const UserInfo = () => {
  const { data, error } = useUserInfoQuery();
  console.log(data);
  console.log(error);
  return <>User</>;
};
