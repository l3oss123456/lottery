import { setLocalStorage } from "../../Utils/storage";

export const GET_THEME = `GET_THEME`;
export const SET_THEME = `SET_THEME`;
export const THEME_ERROR = `THEME_ERROR`;

export const set_data = (post) => {
  return {
    type: SET_THEME,
    data: post,
  };
};
export const set_error = (post) => {
  return {
    type: SET_THEME,
    data: post,
  };
};
export const receive_error = (error) => {
  return {
    type: THEME_ERROR,
    error: error,
  };
};

export const editTheme = (data) => {
  return async (dispatch, getState) => {
    try {
      setLocalStorage(`theme`, data);
      dispatch(set_data(data));
    } catch (error) {
      dispatch(receive_error(error));
    }
  };
};
