import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

import * as contributorActions from '../actions/contributorActions';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { author, repo } = this.props.match.params;
    const { fetchStatistic, fetchActivity, fetchStatisticForYear } = this.props.contributorActions;

    // fetchStatistic(author);
    fetchActivity(repo);
    fetchStatisticForYear();
  }

  render() {
    const { contributors } = this.props;
    const { commits } = this.props;
    const { author } = this.props.match.params;

    console.log(author);
    const parseContributorCommits = () => {
      const getAuthorData = commits.filter(item => item.author.login === author);

      console.log(getAuthorData);
      let getWeeksData = [];
      if (getAuthorData && getAuthorData.weeks) {
        getWeeksData = getAuthorData.weeks.map((item, idx) => {
          const timestamp = new Date(item.w);
          return {
            week: timestamp.toLocaleString(),
            commits: item.c,
            amt: 2400
          };
        });
      }
      return getWeeksData;
    };

    return (
      <div>
        <BarChart width={730} height={250} data={parseContributorCommits()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis dataKey="commits" />
          <Tooltip />
          <Legend />
          <Bar dataKey="commits" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    author: state.contributor.info,
    contributors: state.contributor.contributors,
    commits: state.contributor.commits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contributorActions: bindActionCreators(contributorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
