import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import routes from '../helpers/routes';

function ChallengesList() {
  return (<nav>
      <ul>
        {routes.map(route => (<li><Link to={route.to}>{route.text}</Link></li>))}
      </ul>
    </nav>);
}

export default ChallengesList;
