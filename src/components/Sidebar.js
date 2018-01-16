import { Link } from 'react-router-dom';

const contributorsArr = ['gaearon', 'acdlite', 'bvaughn'];

export const SideBar = () => {
  const contributors = contributorsArr.map((item, index) => (
    <li key={index}>
      <Link to={`/${item}`}>
        {item}
      </Link>
    </li>
  ));

  return (
    <aside>
      <div className="top-contributor">
        <h3>Top Contributor in React Repo</h3>
        <ul>
          {contributors}
        </ul>
      </div>
    </aside>
  );
};
