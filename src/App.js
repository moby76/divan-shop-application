// import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import Config from './pages/Config';
import { Home } from "./pages/Home";
import { ModelDesc } from './pages/ModelDesc';
import { Models } from './pages/Models';
import { ProdDesc } from './pages/ProdDesc';
import Shop from './pages/Shop';

import SoftFur from "./pages/SoftFur";



function App() {

  // const [mainPage, setMainPage] = useState(true)
  return (
        <BrowserRouter >

          {< Navbar />}
          {/* <Modal title={"Test"} /> */}
          <div className="container-fluid pt-4">
            {/* <Alert alert={{ text: 'Test Alert' }} /> */}
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/soft-furniture" exact component={SoftFur} />
              {/* <Route path="/articles" component={Articles} /> */}
              <Route path="/soft-furniture/:id" component={ProdDesc} />
              <Route path="/models/:id" component={ModelDesc} />
              <Route path="/models/" component={Models} />
              <Route path="/shop/:title" component={Shop} />
              <Route path="/configurations/:path" component={Config} />
            </Switch>
          </div>
        </BrowserRouter>

  );
}

export default App;
