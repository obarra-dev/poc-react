import React, {Component} from 'react';

class ForecastExtended extends Component{
    render() {
        const {city} = this.props;
        return (<div>{city}</div>);
    }
}

export default ForecastExtended;