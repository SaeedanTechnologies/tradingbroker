import { useDispatch } from "react-redux";
import { setLoginUser, setToken } from "../store/actions/authActions";
import { RegisterRoute } from "../utils/api_routes";
import client from "../config/axios";

export async function useSignup({
  name,
  email,
  brand_id,
  password,
  country,
  phone,
  currency,
}) {
  const dispatch = useDispatch();
  const userPayload = {
    name,
    email,
    brand_id,
    password,
    country,
    phone,
    currency,
  };

  try {
    const {
      data: { message, payload, success },
    } = await client.post(RegisterRoute, userPayload);
    // dispatch(setToken(res?.data?.accessToken));
    // dispatch(setLoginUser(res?.data));
  } catch (error) {
    console.log("error=========", error);
  }

  //   return {

  //   };
}

export default useSignup;
