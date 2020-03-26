export function updateProfileRequest(data) {
  return {
    type: "@user/UPDATE_PROFILE_REQUEST",
    payload: { data }
  };
}

export function updateProfileSuccess(user) {
  return {
    type: "@user/UPDATE_PROFILE_SUCCESS",
    payload: { user }
  };
}

export function updateProfileFailure() {
  return {
    type: "@user/UPDATE_PROFILE_FAILURE"
  };
}

export function forgotPasswordRequest(email) {
  return {
    type: "@user/FORGOT_PASSWORD_REQUEST",
    payload: { email }
  };
}

export function forgotPasswordSuccess(token, date) {
  return {
    type: "@user/FORGOT_PASSWORD_SUCCESS",
    payload: { token, date }
  };
}

export function forgotPasswordFailure() {
  return {
    type: "@user/FORGOT_PASSWORD_FAILURE"
  };
}

export function resetPasswordRequest(token, password) {
  return {
    type: "@user/RESET_PASSWORD_REQUEST",
    payload: { token, password }
  };
}

export function resetPasswordSuccess(user) {
  return {
    type: "@user/RESET_PASSWORD_SUCCESS",
    payload: { user }
  };
}

export function resetPasswordFailure() {
  return {
    type: "@user/RESET_PASSWORD_FAILURE"
  };
}
