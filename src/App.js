// import logo from './logo.svg';
// import './App.css';

import { Fragment } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <Fragment >
      < Navbar />
      <div className="container pt-4">
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
