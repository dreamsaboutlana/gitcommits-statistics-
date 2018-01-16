import * as constant from '../actions/constants';

export default function reducer(state = {
  contributors: []
}, action) {
  switch (action.type) {
    case constant.FETCH_ACTIVITY: {
      return Object.assign({}, state, { contributors: [] });
    }
    case constant.FETCH_ACTIVITY_SUCCESS: {
      return Object.assign({}, state, { contributors: action.payload });
    }
    case constant.FETCH_ACTIVITY_FAILURE: {
      return Object.assign({}, state, { contributors: action.payload });
    }
    default:
      return state;
  }
}
