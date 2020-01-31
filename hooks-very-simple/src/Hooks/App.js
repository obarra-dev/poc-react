import React, {useState} from 'react';
import Seconds from './Seconds';

const App = () => {
    const [ showTimer, setShowTimer ] = useState(false);

    return (
      <div className="App">
        <h1>Learning Hooks</h1>      
        <button onClick={() => setShowTimer(!showTimer)}>
          {!showTimer
                        ? 'Activate chronometer'
                        : 'Deactivate chronometer'}
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
export default App;
