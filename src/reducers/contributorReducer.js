import * as constant from '../actions/constants';

export default function reducer(state = {
  info: {},
  contributors: [],
  commits: []
}, action) {
  switch (action.type) {
    case constant.FETCH_STATISTIC: {
      return Object.assign({}, state, { info: 'FETCHING' });
    }
    case constant.FETCH_STATISTIC_SUCCESS: {
      return Object.assign({}, state, { info: action.payload });
    }
    case constant.FETCH_STATISTIC_FAILURE: {
      return Object.assign({}, state, { info: action.payload });
    }
    case constant.FETCH_ACTIVITY: {
      return Object.assign({}, state, { contributors: [] });
    }
    case constant.FETCH_ACTIVITY_SUCCESS: {
      return Object.assign({}, state, { contributors: action.payload });
    }
    case constant.FETCH_ACTIVITY_FAILURE: {
      return Object.assign({}, state, { contributors: action.payload });
    }
    case constant.FETCH_STATISTIC_FOR_YEAR: {
      return Object.assign({}, state, { commits: [] });
    }
    case constant.FETCH_STATISTIC_FOR_YEAR_SUCCESS: {
      return Object.assign({}, state, { commits: action.payload });
    }
    case constant.FETCH_STATISTIC_FOR_YEAR_FAILURE: {
      return Object.assign({}, state, { commits: action.payload });
    }

    default:
      return state;
  }
}
