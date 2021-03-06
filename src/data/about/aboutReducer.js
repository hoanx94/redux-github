import * as actionTypes from '../../constants/actionTypes';
import Immutable from 'immutable';

export const about  = (state = Immutable.Map(), action) => {
  switch(action.type) {
    case actionTypes.GET_ABOUT_LOADED:
      return state.merge(action.data);
  }
  return state;
}
