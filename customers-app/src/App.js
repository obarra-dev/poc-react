import React, { Component } from 'react';
import {Switch, Link, BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';



class App extends Component {

  renderHome = () => <HomeContainer/>;

  
  renderCustomerListContainer = () => <CustomersContainer/>;
  
  renderCustomerContainer = () => <CustomerContainer/>;

  renderCustomerNewContainer = () => <h1>renderCustomerNewContainer</h1>;


  render(){
    return (
      <Router>
          <div>
            
            <Route exact path="/">{this.renderHome()}</Route>
            <Route exact path="/customers">{this.renderCustomerListContainer()}</Route>
            <Switch>
            <Route  ren path="/customers/new">{this.renderCustomerNewContainer()}</Route>
            
            <Route  path="/customers/:dni" 
              render={props => <CustomerContainer   dni={props.match.params.dni}/>}></Route>
               
            </Switch>
                
          </div>
      </Router>
    )
  } 
}

export default App;