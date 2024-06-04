import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // ok here we will check if there is a token of a client if there is we will return the outlet if
  // there isn't we will return loading then we will retrun to the login page.
  return <Outlet />;
};

export default PrivateRoute;
