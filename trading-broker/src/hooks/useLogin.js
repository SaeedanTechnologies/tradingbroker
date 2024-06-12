import { useDispatch } from "react-redux";
import { setToken, setLoginUser } from "../store/actions/authActions";
import { LoginRoute } from "../utils/api_routes";
import client from "../config/axios";

export async function useLogin({ email, password }) {
 
    const dispatch = useDispatch();
  const userPayload = {
    email,
    password,
  };

  try {
    const {
      data: { message, payload, success },
    } = await client.post(LoginRoute, userPayload);

    // if (success) {
    //   dispatch(setToken(payload?.accessToken));
    //   dispatch(setLoginUser(payload));
    // }
  } catch (error) {
    console.log("error=====", error);
  }

  //   return {
  //     message,
  //     payload,
  //     success,
  //   };
}

export default useLogin;
