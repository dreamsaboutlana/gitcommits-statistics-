import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contributorActions from '../actions/contributorActions';
import { Graph } from '../components/Graph';

class Content extends Component {

  componentWillMount() {
    const { repo } = this.props.match.params;
    const { fetchActivity } = this.props.contributorActions;
    fetchActivity(repo);
  }

  parseContributorCommits = (contributors, author) => {
    const getAuthorData = contributors.filter(item => item.author.login === author)[0];
    let getWeeksData = [];
    if (getAuthorData && getAuthorData.weeks) {
      getWeeksData = getAuthorData.weeks.filter(item => {
        const timestamp = new Date(0);
        timestamp.setUTCSeconds(item.w);
        if (timestamp.getFullYear() === new Date().getFullYear() - 1) {
          return {
            month: item.w,
            commits: item.c
          };
        }
      });
    }
    return getWeeksData;
  };

  getMonth = month => {
    const utcSeconds = month;
    const timestamp = new Date(0);
    timestamp.setUTCSeconds(utcSeconds);
    return timestamp.getMonth() + 1;
  };


  createYearData = (arr) => {
    let checkedMonth = null;
    const outputData = arr.map(item => {
      if (this.getMonth(item.w) != checkedMonth) {
        checkedMonth = this.getMonth(item.w);
        let summOfCommits = 0;
        arr.filter(item => {
          if (this.getMonth(item.w) === checkedMonth) {
            summOfCommits += item.c;
          }
        });
        return {
          month: checkedMonth,
          commits: summOfCommits,
          amt: 2400
        };
      }
    });
    return (outputData.filter((k) => {
      return k;
    }));
  };

  render() {
    const { contributors } = this.props;
    const { author } = this.props.match.params;
    return (
      <div>
        <Graph data={this.createYearData(this.parseContributorCommits(contributors, author))} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contributors: state.contributor.contributors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contributorActions: bindActionCreators(contributorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
