import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  Actions
}                         from './user.action';
import {
  createFeatureSelector, 
  createSelector
}                         from '@ngrx/store';
import { User }           from '../../../models/admin/access';

export interface State {
  data: User[];
  selected: User;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function reducer(state = initialState, action: Actions): State {

  switch (action.type) {
      /*************************
     * GET all users actions
     ************************/
    case LOAD_USERS:
      return {
        ...state,
        action: LOAD_USERS,
        done: false,
        selected: null,
        error: null
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        selected: null,
        error: null
      };
    case LOAD_USERS_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

      /*************************
     * GET user by ID actions
     ************************/
    case LOAD_USER:
      return {
        ...state,
        action: LOAD_USER,
        done: false,
        selected: null,
        error: null
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        done: true,
        error: null
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };

      /*************************
     * CREATE user actions
     ************************/
    case CREATE_USER:
      return {
        ...state,
        selected: action.payload,
        action: CREATE_USER,
        done: false,
        error: null
      };
    case CREATE_USER_SUCCESS:
      {
        const newUser = {
          ...state.selected,
          id: action.payload
        };
        const data = [
          ...state.data,
          newUser
        ];
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };

      /*************************
     * UPDATE user actions
     ************************/
    case UPDATE_USER:
      return {
        ...state,
        selected: action.payload,
        action: UPDATE_USER,
        done: false,
        error: null
      };
    case UPDATE_USER_SUCCESS:
      {
        const index = state
          .data
          .findIndex(h => h.id === state.selected.id);
        if (index >= 0) {
          const data = [
            ...state.data.slice(0, index),
            state.selected,
            ...state.data.slice(index + 1)
          ];
          return {
            ...state,
            data,
            done: true,
            selected: null,
            error: null
          };
        }
        return state;
      }
    case UPDATE_USER_ERROR:
      return {
        ...state,
        done: true,
        selected: null,
        error: action.payload
      };

      /*************************
     * DELETE user actions
     ************************/
    case DELETE_USER:
      {
        const selected = state.data.find(h => h.id === action.payload);
        return {
          ...state,
          selected,
          action: DELETE_USER,
          done: false,
          error: null
        };
      }
    case DELETE_USER_SUCCESS:
      {
        const data = state.data.filter(h => h.id !== state.selected.id);
        return {
          ...state,
          data,
          selected: null,
          error: null,
          done: true
        };
      }
    case DELETE_USER_ERROR:
      return {
        ...state,
        selected: null,
        done: true,
        error: action.payload
      };
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getUsersState = createFeatureSelector < State > ('users');
export const getAllUsers = createSelector(getUsersState, (state: State) => state.data);
export const getUser = createSelector(getUsersState, (state: State) => {
  if (state.action === LOAD_USER && state.done) {
    return state.selected;
  } else {
    return null;
  }

});
export const isDeleted = createSelector(getUsersState, (state: State) =>
  state.action === DELETE_USER && state.done && !state.error);
export const isCreated = createSelector(getUsersState, (state: State) =>
 state.action === CREATE_USER && state.done && !state.error);
export const isUpdated = createSelector(getUsersState, (state: State) =>
 state.action === UPDATE_USER && state.done && !state.error);

export const getDeleteError = createSelector(getUsersState, (state: State) => {
  return state.action === DELETE_USER
    ? state.error
   : null;
});
export const getCreateError = createSelector(getUsersState, (state: State) => {
  return state.action === CREATE_USER
    ? state.error
   : null;
});
export const getUpdateError = createSelector(getUsersState, (state: State) => {
  return state.action === UPDATE_USER
    ? state.error
   : null;
});
export const getUsersError = createSelector(getUsersState, (state: State) => {
  return state.action === LOAD_USERS
    ? state.error
   : null;
});
export const getUserError = createSelector(getUsersState, (state: State) => {
  return state.action === LOAD_USER
    ? state.error
   : null;
});