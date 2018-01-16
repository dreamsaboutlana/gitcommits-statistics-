import axios from 'axios';
import * as constant from './constants';

export function fetchStatistic(user) {

  return (dispatch) => {
    dispatch({
      type: constant.FETCH_STATISTIC
    });

    axios.get(`https://api.github.com/repos/facebook/react/commits?author=${user}`)
      .then(({ data }) => {
        dispatch({ type: constant.FETCH_STATISTIC_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({ type: constant.FETCH_STATISTIC_FAILURE, payload: e });
      });
  };
}


export function fetchStatisticForYear() {

  return (dispatch) => {
    dispatch({
      type: constant.FETCH_STATISTIC_FOR_YEAR
    });

    axios.get('https://api.github.com/repos/facebook/react/commits?since=2015-01-01T00:22:07Z')
      .then(({ data }) => {
        dispatch({ type: constant.FETCH_STATISTIC_FOR_YEAR_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({ type: constant.FETCH_STATISTIC_FOR_YEAR_FAILURE, payload: e });
      });
  };
}


export function fetchActivity(repoName = 'react') {

  return (dispatch) => {
    dispatch({
      type: constant.FETCH_ACTIVITY
    });

    let url = '';

    console.log(repoName);
    switch (repoName) {
      case 'react': {
        url = 'https://api.github.com/repos/facebook/react/stats/contributors';
        break;
      }
      case 'angular': {
        url = 'https://api.github.com/repos/angular/angular/stats/contributors';
        break;
      }
      case 'vue': {
        url = 'https://api.github.com/repos/facebook/react/stats/contributors';
        break;
      }
      default:
        url = 'https://api.github.com/repos/facebook/react/stats/contributors';
    }

    axios.get(url)
      .then(({ data }) => {
        dispatch({ type: constant.FETCH_ACTIVITY_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({ type: constant.FETCH_ACTIVITY_FAILURE, payload: e });
      });
  };
}
