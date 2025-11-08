import { createMachine } from 'xstate';

export const mouseMachine = createMachine({
  initial: 'notHovered',
  states: {
    notHovered: {
      on: {
        MOUSE_OVER: 'hovered',
      },
    },
    hovered: {
      on: {
        MOUSE_OUT: 'notHovered',
      },
    },
  },
});
