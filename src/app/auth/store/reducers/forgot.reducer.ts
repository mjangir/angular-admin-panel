import { fromForgot } from '../actions';

/**
 * Forgot Password State
 * 
 * @export
 * @interface ForgotState
 */
export interface ForgotState {
  loading: boolean,
  loaded: boolean,
  error?: any
}

export const initialState: ForgotState = {
  loading: false,
  loaded: true,
  error: null
};

/**
 * Forgot Password Reducer
 * 
 * @export
 * @param {ForgotState} [state=initialState] Initial State
 * @param {fromForgot.ForgotPasswordActions} action 
 * @returns {ForgotState}
 */
export function reducer(
  state: ForgotState = initialState,
  action: fromForgot.ForgotPasswordActions
): ForgotState {

  switch(action.type) {
    case fromForgot.FORGOT_PASSWORD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromForgot.FORGOT_PASSWORD_SUCCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromForgot.FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload.error
      };
    }
  }
  return state;
}