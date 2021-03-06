
import React from 'react';
import {Home} from './pages/HomePage/Home';
import {Account} from './pages/Account/Account';
import {Service} from './pages/Service/Service';
import {About} from './pages/About/About';
import {NoMatch} from './pages/NoMatch';
import {Phone} from './pages/Phone/Phone';
import {Signup} from './pages/Signup/Signup';
import {Navbar, Footer, ScrollTop} from "./components";

import GlobalStyle from "./GlobalStyles";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    
      
      
      
      <Router>
        <GlobalStyle /> 
        <ScrollTop />
           <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
 <Route  path="/about" component={About}
 />
 <Route  path="/phone" component={Phone}
 />
 <Route  path="/account" component={Account}
 />
 <Route path='/service' component={Service} />
 <Route  path="/signup" component={Signup}
 />
 <Route  component={NoMatch}
 />
         </Switch>
         <Footer />
      </Router>
      
  );
}

export default App;
