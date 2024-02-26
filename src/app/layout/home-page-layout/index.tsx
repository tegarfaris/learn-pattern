import React from "react";
import Navbar from "@/components/navbar";


const HomePageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

    return (
      <main>
        <Navbar />
        <header>homepage layout</header>
        <section>{children}</section>
      </main>
    );
  
};

export default HomePageLayout;
