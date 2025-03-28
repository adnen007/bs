import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const token = useSelector((state) => {
    return state.user.access_token;
  });

  const role = useSelector((state) => {
    return state.user.user.role;
  });

  const navigate = useNavigate();
  console.log("navigate ref", navigate);

  useEffect(() => {
    if (!token) {
      navigate("/");
      // and show warn that you need to login first
    } else if (!(role === "admin")) {
      navigate("/buildings");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, role]);

  return <Outlet />;
};

export default PrivateRoute;

// || !(role === "admin")
