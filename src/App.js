// import logo from './logo.svg';
// import './App.css';

// import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from "./components/Navbar";
import { Article } from './pages/Article';
import { Articles } from "./pages/Articles";
import { Home } from "./pages/Home";
// import { ProdDesc } from "./pages/ProdDesc";
import { SoftFur } from "./pages/SoftFur";


function App() {
  return (
    <BrowserRouter >
      < Navbar />
      <div className="container pt-4">
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/soft-furniture" component={SoftFur} />
          <Route path="/articles" component={Articles} />
          <Route path="/articles/:title" component={Article} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
