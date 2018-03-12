import * as fromRegister from "../actions/register.action";

/**
 * Register State
 * 
 * @export
 * @interface RegisterState
 */
export interface RegisterState {
  loading:  boolean,
  loaded:   boolean,
  error?:   any
}

export const initialState: RegisterState = {
  loading:  false,
  loaded:   false,
  error:    null
}

/**
 * Register Reducer
 * 
 * @export
 * @param {RegisterState} [state=initialState] 
 * @param {fromRegister.RegisterActions} action 
 * @returns {RegisterState}
 */
export function reducer(
  state: RegisterState = initialState,
  action: fromRegister.RegisterActions
): RegisterState {

  switch(action.type) {
    case fromRegister.REGISTER: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromRegister.REGISTER_SUCCES: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromRegister.REGISTER_ERROR: {
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