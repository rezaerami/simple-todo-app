import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  boardsReducers,
} from 'ducks';

const boardsPersistConfig = {
  key: 'boards',
  storage,
};

const rootReducers = {
  boards: persistReducer(boardsPersistConfig, boardsReducers),
};

export default rootReducers;
