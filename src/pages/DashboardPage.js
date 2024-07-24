import DashboardDesk from "../components/DashboardDesk";
import DashboardMobile from "../components/DashboardMobile";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../features/user/userAsync";

import { useState, useEffect } from "react";

const DashboardPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (screenWidth >= 768) {
    return <DashboardDesk />;
  }
  return <DashboardMobile />;
};

export default DashboardPage;
