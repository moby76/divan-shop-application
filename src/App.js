import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ModelDesc } from './pages/ModelDesc';
import { Models } from './pages/Models';
import { ProdDesc } from './pages/ProdDesc';
// import { ProdDesc } from "./pages/ProdDesc";
import SoftFur from "./pages/SoftFur";
// import { Alert } from './components/Alert';

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
              <Route path="/models/:id" component={ModelDesc} />
              <Route path="/models/" component={Models} />
            </Switch>
          </div>
        </BrowserRouter>

  );
}

export default App;
