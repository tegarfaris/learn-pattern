import React from "react";
import Cookies from "js-cookie";

const HomePage: React.FC = () => {
  React.useEffect(() => {
    if (Cookies.get("dataRegister")) {
      console.log(Cookies.get("dataRegister"));
    }
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
