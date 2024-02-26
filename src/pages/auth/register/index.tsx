import React from 'react'

import { NextPageWithLayout } from '@/app/interface/home-page.interface';
import { AuthLayout } from '@/app/layout';
import Register from '@/app/page-modules/register'

const RegisterPages: NextPageWithLayout = () => {
    return <Register/>;
  };
  
  export default RegisterPages;
  
  RegisterPages.getLayout = function getLayout(page: React.ReactElement) {
    return <AuthLayout>{page}</AuthLayout>;
  };