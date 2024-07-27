import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../features/user/userSlice";
import axios from "axios";

const useAxiosInterceptor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response && error.response.status === 401) {
          dispatch(userActions.logout());
          navigate("/");
          error.message = "Not Authenticated";
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );
  }, [dispatch, navigate]);
};

export default useAxiosInterceptor;
