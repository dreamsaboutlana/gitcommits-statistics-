import axios from 'axios';
import * as constant from './constants';

export function fetchActivity(repoName = 'react') {

  return (dispatch) => {
    dispatch({
      type: constant.FETCH_ACTIVITY
    });

    let url = '';
    switch (repoName) {
      case 'react': {
        url = 'https://api.github.com/repos/facebook/react/stats/contributors';
        break;
      }
      case 'angular': {
        url = 'https://api.github.com/repos/angular/angular/stats/contributors';
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
