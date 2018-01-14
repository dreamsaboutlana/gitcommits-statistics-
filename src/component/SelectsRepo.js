import * as actions from '../actions/repoActions';

const optionsList = ['react', 'angular', 'vue'];


export class SelectRepo extends Component {

  getSelectOption = (e) => {
    const value = e.target.value;
    actions.selectRepo(value);
  };

  render() {
    return (
      <div className="select-repo">
        <h3>Choose a repository</h3>
        <select onChange={this.getSelectOption}>
          {
            optionsList.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))
          }
        </select>
      </div>
    );
  }

};
