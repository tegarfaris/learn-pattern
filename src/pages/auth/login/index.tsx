import React from 'react'

import { NextPageWithLayout } from '@/app/interface/home-page.interface';
import { AuthLayout } from '@/app/layout';

import Login from '@/app/page-modules/login'

const LoginPages: NextPageWithLayout = () => {
  return <Login />;
};

export default LoginPages;

LoginPages.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};