import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setLoginUser } from "../store/actions/authActions";
import { LoginRoute } from "../utils/api_routes";
import client from "../config/axios";
import { Toast } from "../components";

const useLogin = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await client.post(LoginRoute, { email, password });
      const { payload, success, message } = response.data;

      if (success) {
        dispatch(setToken(payload?.accessToken));
        dispatch(setLoginUser(payload));
        Toast({ variant: "success", message });
        navigate("/dashboard");
      } else {
        Toast({ variant: "error", message: message || "Login failed" });
      }
    } catch (error) {
      Toast({ variant: "error", message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin,
  };
};

export default useLogin;
