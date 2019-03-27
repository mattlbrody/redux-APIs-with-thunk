import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import userReducer from './UsersReducer';

// referenced by mapStateToProps
export default combineReducers({
  posts: postsReducer,
  users: userReducer
});