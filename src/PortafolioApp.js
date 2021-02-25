import React from 'react'
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Opportunities } from './components/Opportunities';
import { Contact } from './components/Contact';

export const PortafolioApp = () => {
  
    return (
        <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <div className='wrapper'>
              <div className='home'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/opportunities' component={Opportunities} />
                  <Route exact path='/solutions' component={Solutions} />
                  <Route exact path='/contact-us' component={Contact} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
}
  function Solutions() {
    return <p>Solutions that help you.</p>;
  }