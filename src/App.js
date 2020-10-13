import { doesNotMatch } from 'assert';
import React from 'react';
import {Home} from './Home';
import {Account} from './Account';
import {About} from './About';
import {NoMatch} from './NoMatch';
import {Phone} from './Phone';
import {Layout} from "./components/Layout";
import {NavBar} from "./components/NavBar";
import {BigBack} from "./components/BigBack";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <BigBack />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}
 />
 <Route  path="/about" component={About}
 />
 <Route  path="/phone" component={Phone}
 />
 <Route  path="/account" component={Account}
 />
 <Route  component={NoMatch}
 />
         </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
