import { COUNTER_INC, COUNTER_DEC } from './../constants/action-types';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_INC:
      return (state + 1);
    case COUNTER_DEC:
      return (state - 1);
    default:
      return state;
  }
};

export default countReducer;