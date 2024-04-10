// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';
import { ReadUser } from '../Redux/user';
import { RaisonRead } from '../Redux/raison';
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers
});

const { dispatch } = store;

dispatch(ReadUser())
dispatch(RaisonRead())

export { store, dispatch };
