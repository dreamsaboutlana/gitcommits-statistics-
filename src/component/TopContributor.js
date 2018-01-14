import { Link } from 'react-router-dom';


export const TopContributor = () => (
  <div className="top-contributor">
    <h3>Top Contributor</h3>
    <ul>
      <li>
        <Link to="/content">Seum</Link>
      </li>
      <li>
        <Link to="/content2">Piter</Link>
      </li>
      <li>
        <Link to="/content3">Piter2</Link>
      </li>
    </ul>
  </div>
);
