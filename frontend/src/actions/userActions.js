import { USER_LIST_REQUEST } from "../constants/userConstants";

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });

  try {
  } catch (error) {}
};
