import { Outlet } from "react-router-dom";

const PrivateRouteAdmin = () => {
  // ok here we will check if there is a token of a admin if there is we will return the outlet if
  // there isn't we will return loading then we will retrun to the login page.
  return <Outlet />;
};

export default PrivateRouteAdmin;

// why you have two private router : cause we don't want the client to be able to log to the dashboard
// and get weird results but so here we will know he have the token of the admin not a client.
