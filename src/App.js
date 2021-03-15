import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ProdDesc } from './pages/ProdDesc';
// import { ProdDesc } from "./pages/ProdDesc";
import SoftFur from "./pages/SoftFur";



function App() {
  return (

        <BrowserRouter >
          < Navbar />
          <div className="container pt-4">
            {/* <Alert alert={{ text: 'Test Alert' }} /> */}
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/soft-furniture" exact component={SoftFur} />
              {/* <Route path="/articles" component={Articles} /> */}
              <Route path="/soft-furniture/:id" component={ProdDesc} />
            </Switch>
          </div>
        </BrowserRouter>

  );
}

export default App;
