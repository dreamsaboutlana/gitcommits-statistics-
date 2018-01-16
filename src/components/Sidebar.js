import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as contributorActions from '../actions/contributorActions';

const repos = [
  {
    name: 'react',
    contributors: ['sophiebits', 'zpao', 'gaearon']
  },
  {
    name: 'angular',
    contributors: ['vsavkin', 'vicb', 'tbosch'],
  },
  {
    name: 'vue',
    contributors: ['yyx99080', 'Hanks10100', 'defcc']
  }
];

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectRepo: 'react'
    };
  }

  getSelectOption = (e) => {
    const { value } = e.target;
    this.setState({ selectRepo: value });
  };

  render() {
    const { selectRepo } = this.state;
    const selectList = repos.map((item, index) => (
      <option key={index} value={item.name}>{item.name}</option>
    ));

    let contributorsList = [];
    repos.forEach((item) => {
      if (item.name.toUpperCase() === selectRepo.toUpperCase()) {
        contributorsList = item.contributors;
      }
    });

    const contributors = contributorsList.map((item, index) => (
      <li key={index}>
        <Link to={`/${this.state.selectRepo}/${item}`}>
          {item}
        </Link>
      </li>
    ));
    return (
      <aside>
        <div className="select-repo">
          <h3>Choose a repository</h3>
          <select onChange={this.getSelectOption}>
            {selectList}
          </select>
        </div>

        <div className="top-contributor">
          <h3>Top Contributor</h3>
          <ul>
            {contributors}
          </ul>
        </div>
      </aside>
    );
  }
}

//
// function mapStateToProps(state) {
//   return {
//     contributors: state.contributor.contributors
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     contributorActions: bindActionCreators(contributorActions, dispatch)
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
