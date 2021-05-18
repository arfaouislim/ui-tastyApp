import * as types from "../actionTypes";
import { loadState } from "../../localStorage";

export default function user(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN:
    case types.SIGNUP:
      return { ...state, ...payload.user, jwt: payload.jwt };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}
