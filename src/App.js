// import logo from './logo.svg';
// import './App.css';

// import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Alert } from './components/Alert';

import { Navbar } from "./components/Navbar";
import { AlerState } from './context/alert/alertState';
import { GithubState } from './context/github/githubState';
import { Article } from './pages/Article';
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";
// import { ProdDesc } from "./pages/ProdDesc";
import SoftFur from "./pages/SoftFur";



function App() {
  return (
    <GithubState>
      <AlerState>
        <BrowserRouter >
          < Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'Test Alert' }} />
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/soft-furniture" component={SoftFur} />
              <Route path="/articles" component={Articles} />
              <Route path="/articles/:title" component={Article} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlerState>
    </GithubState>
  );
}

export default App;
