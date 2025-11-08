import { useMachine } from '@xstate/react';
import './App.css'
import { countMachine } from './machines/counterMachine';
import { mouseMachine } from './machines/mouseMachine';
import { textMachine } from './machines/textMachine';

function App() {

  const [state, send] = useMachine(countMachine);
  const [state2, send2] = useMachine(mouseMachine);
  const [state3, send3] = useMachine(textMachine);

  return (
    <>
    <div>
     <p className="read-the-docs">
        Value {JSON.stringify(state.value)}
      </p>
      <p className="read-the-docs">
        Context {JSON.stringify(state.context)}
      </p>

      <button onClick={() => send({ type: 'INC' })}>Increment</button>
      <button onClick={() => send({ type: 'DEC' })}>Decrement</button>
      <button onClick={() => send({ type: 'SET', value: 10 })}>Set to 10</button>
    </div>

    <div>
      <p className="read-the-docs">
        Value {JSON.stringify(state2.value)}
      </p>
      <p className="read-the-docs">
        Context {JSON.stringify(state2.context)}
      </p>

      <button onClick={() => send2({ type: 'MOUSE_OVER' })}>Mouse Over</button>
      <button onClick={() => send2({ type: 'MOUSE_OUT' })}>Mouse Out</button>
    </div>
 
     <div>
      <p className="read-the-docs">
        Value {JSON.stringify(state3.value)}
      </p>
      <p className="read-the-docs">
        Context {JSON.stringify(state3.context)}
      </p>
      <button onClick={() => send3({ type: 'text.edit' })}>Edit</button>
      <button onClick={() => send3({ type: 'text.change', value: 'New Value Omar rules' })}>Change</button>
      <button onClick={() => send3({ type: 'text.commit' })}>Commit</button>
      <button onClick={() => send3({ type: 'text.cancel' })}>Cancel</button>
    </div>
    </>
  )
}

export default App
