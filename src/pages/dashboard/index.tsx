import { NextPageWithLayout } from '@/app/interface/home-page.interface';
import DashboardLayout from '@/app/layout/dashboard-layout';
import DashboardPage from '@/app/page-modules/dashboard-page'
import React from 'react'

const DashboardPages: NextPageWithLayout = () => {
    return <DashboardPage/>;
  };
  
  export default DashboardPages;
  
  DashboardPages.getLayout = function getLayout(page: React.ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };