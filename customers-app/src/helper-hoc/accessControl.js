import React, {Component} from 'react';
import {connect} from 'react-redux';

export const accessControl = permissionRequired => WrappedComponent => {
    const SecuredControl = class extends Component {

        render(){
            const {permissions} = this.props.user;

            const isAllow = permissionRequired.every(p => permissions.indexOf(p) > -1);
            if(!isAllow){
                return <div><i>You are not authorized to access</i></div>
            }

            return <WrappedComponent {...this.props} />
        }
    }

    return connect(state => ({user: state.user}))(SecuredControl);
}