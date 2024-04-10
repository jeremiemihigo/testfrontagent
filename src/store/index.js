// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';
import { ReadUser } from '../Redux/user.jsx';
import { RaisonRead } from '../Redux/Feedback.jsx';
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers
});

const { dispatch } = store;

dispatch(ReadUser())
dispatch(RaisonRead())

export { store, dispatch };
