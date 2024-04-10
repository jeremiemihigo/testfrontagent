// third-party
import { combineReducers } from 'redux';

// project import

import user from '../../Redux/user';
import raison from '../../Redux/raison';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ user, raison });

export default reducers;
