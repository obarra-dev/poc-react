import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';


class HomeContainer extends Component {

    handleOnClick = () =>{
        console.log("handle on click");
        this.props.history.push('/customers');
        
    }

    render() {
        return (
            <div>
                <AppFrame header="HEADER" 
                 body={
                    <div>
                        This is initial screen
                        <CustomerActions>
                            <button onClick={this.handleOnClick}> Listado  </button>
                        </CustomerActions>
                    </div>
                 }>
                   
                </AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);