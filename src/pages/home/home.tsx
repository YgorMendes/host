import React, { useEffect } from 'react';
import { PageHeader, Content } from '@neogrid/design-system';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const isAuthenticateStore = localStorage.getItem('is-authenticate');
  const isAuthenticate = JSON.parse(isAuthenticateStore || '{}');

  useEffect(() => {
    if (isAuthenticate !== true) {
      navigate('/login');
      localStorage.setItem('item-selected', 'login');
    }
  }, [isAuthenticateStore, isAuthenticate]);

  return (
    <>
      <PageHeader title="Home" subTitle="Home page of the platform" />

      <Content className="contant-page">Content</Content>
    </>
  );
};
