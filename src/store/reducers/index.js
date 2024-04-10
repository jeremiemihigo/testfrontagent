// third-party
import { combineReducers } from 'redux';

// project import

import user from '../../Redux/user';
import Raison from '../../Redux/raison';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ user, raison : Raison });

export default reducers;
