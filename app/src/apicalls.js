import {
  LoginUserFailed,
  LoginUserStart,
  LoginUserSuccess,
  RegisterUserFailed,
  RegisterUserStart,
  RegisterUserSuccess,
} from "./redux/Userslice";
import axios from "axios";

console.log(import.meta.env.VITE_BACKEND_URL);

export const RegisterUser = async (dispatch, data) => {
  dispatch(RegisterUserStart());

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/register`,
      { ...data }
    );

    dispatch(RegisterUserSuccess(res.data));
    console.log(res.data);
  } catch (e) {
    console.log(e);
    dispatch(RegisterUserFailed(e.response.data.error));
  }
};

export const Loginuser = async (dispatch, data) => {
  dispatch(LoginUserStart());

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/login`,
      { ...data }
    );

    dispatch(LoginUserSuccess(res.data));

    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (e) {
    dispatch(LoginUserFailed(e.response.data.error));
  }
};
