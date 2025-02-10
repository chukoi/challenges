import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function Challenge({Component}) {
  return (<div className="Challenge"><span className="backButton"><Link to="/">Back</Link></span><Component/></div>);
}

export default Challenge;
