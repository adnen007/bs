import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const token = useSelector((state) => {
    return state.user.access_token;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      // and show warn that you need to login first
    }
  }, []);

  return <Outlet />;
};

export default PrivateRoute;
