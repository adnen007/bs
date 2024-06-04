import DashboardDesk from "../components/DashboardDesk";
import DashboardMobile from "../components/DashboardMobile";

import { useState, useEffect } from "react";
const DashboardPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth >= 768) {
    return <DashboardDesk />;
  }
  return <DashboardMobile />;
};

export default DashboardPage;
