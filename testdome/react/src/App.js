import {Route, Routes} from 'react-router-dom';
import ChallengesList from './views/ChallengesList';
import './App.css';
import React from 'react';
import Challenge from './views/Challenge';
import routes from './helpers/routes';

function App() {
  return (<div className="App">
    <header className="App-header">
      Challenges
    </header>
    <Routes>
      <Route path="/" element={<ChallengesList/>}/>
      {routes.map((route) => (<Route path={route.to} element={<Challenge Component={route.component}/>}/>))}
    </Routes>
  </div>);
}

export default App;
