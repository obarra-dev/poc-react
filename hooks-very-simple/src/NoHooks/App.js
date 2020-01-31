import React, {Component} from 'react';
import Seconds from './Seconds';

class App extends Component {

    state = {
        showTimer: false
    };

    setShowTimer = showTimer => {
        this.setState({showTimer})
    }

    render() {
        const {setShowTimer} = this;
        const {showTimer} = this.state;
        return (
          <div className="App">
            <h1>Example without hooks</h1>    
            <button onClick={() => setShowTimer(!showTimer)}>
                {!showTimer
                    ? 'Activate chronometer'
                    : 'Deactivate chronomter'}
            </button>
            {!showTimer
                ? (
                    <div className="alert alert-danger">
                        Off
                    </div>
                )
                : (
                    <div className="alert alert-success">
                        On! <Seconds/> Seconds
                    </div>
                )
            }
          </div>
        );
    }
}

export default App;
