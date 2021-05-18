import { URL } from "../constants";
import { login, logout, signUp } from "../redux/actions";

export const fetchCall = async (url, config = {}) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return await res.json();
};

export const loginService = (credentials) => async (dispatch) => {
  const res = await fetchCall(`${URL.STRAPI_AUTH_LOCAL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: credentials.identifier,
      password: credentials.password,
    }),
  });

  console.log("log service>>>>>", res);
  return dispatch(login(res.user, res.jwt));
};

export const signUpService = (user) => async (dispatch) => {
  const res = await fetchCall(`${URL.STRAPI_AUTH_LOCAL_REGISTER}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user,
    }),
  });
  return dispatch(signUp(res));
};

export const logoutService = () => async (dispatch) => {
  try {
    return dispatch(logout());
  } catch (e) {
    return e;
  }
};
