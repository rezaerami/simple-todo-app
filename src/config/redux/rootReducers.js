import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  boardsReducers,
  columnsReducers,
} from 'ducks';

const boardsPersistConfig = {
  key: 'boards',
  storage,
};

const columnsPersistConfig = {
  key: 'columns',
  storage,
};

const rootReducers = {
  boards: persistReducer(boardsPersistConfig, boardsReducers),
  columns: persistReducer(columnsPersistConfig, columnsReducers),
};

export default rootReducers;
