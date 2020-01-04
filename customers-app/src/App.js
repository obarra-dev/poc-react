import React, { Component } from 'react';
import {Switch, Link, BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';



class App extends Component {

  renderHome = () => <HomeContainer/>;

  
  renderCustomerListContainer = () => <CustomersContainer/>;
  
  renderCustomerContainer = () => <h1>customer container</h1>;

  renderCustomerNewContainer = () => <h1>renderCustomerNewContainer</h1>;


  render(){
    return (
      <Router>
          <div>
            
            <Route exact path="/">{this.renderHome()}</Route>
            <Route exact path="/customers">{this.renderCustomerListContainer()}</Route>
            <Switch>
            <Route  path="/customers/new">{this.renderCustomerNewContainer()}</Route>
            
              <Route  path="/customers/:dni">{this.renderCustomerContainer()}</Route>
               
            </Switch>
                
          </div>
      </Router>
    )
  } 
}

export default App;