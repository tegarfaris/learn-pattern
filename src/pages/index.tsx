import { NextPageWithLayout } from "@/app/interface/home-page.interface";
import { HomePageLayout } from "@/app/layout";
import HomePage from "@/app/page-modules/home-page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};