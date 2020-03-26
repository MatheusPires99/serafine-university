import { produce } from "immer";

const INITIAL_STATE = {
  user: null,
  token: null,
  date: null,
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.user = action.payload.user;
        break;
      }
      case "@user/UPDATE_PROFILE_SUCCESS": {
        draft.user = action.payload.user;
        break;
      }
      case "@auth/SIGN_OUT": {
        draft.user = null;
        break;
      }
      case "@user/FORGOT_PASSWORD_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@user/FORGOT_PASSWORD_SUCCESS": {
        draft.token = action.payload.token;
        draft.date = action.payload.date;
        draft.loading = false;
        break;
      }
      case "@user/FORGOT_PASSWORD_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@user/RESET_PASSWORD_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@user/RESET_PASSWORD_SUCCESS": {
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case "@user/RESET_PASSWORD_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
