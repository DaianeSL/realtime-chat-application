import React, { createContext, useReducer } from 'react';

const initialState = {
  socket: null,
  users: [],
  user: {},
};

const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: action.payload };
    case 'SOCKET_INSTANCE':
      return { ...state, socket: action.payload };
    default:
      throw new Error();
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
