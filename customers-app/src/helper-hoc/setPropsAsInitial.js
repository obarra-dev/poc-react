import React, {Component} from 'react';

//TODO estudiar como trabaja enableReinitialize y la alternativa p
export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render (){
            return <WrappedComponent {...this.props} 
            initialValues={this.props}
            enableReinitialize/>
        }
    }
)