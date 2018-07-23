import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from '../client/reducers';

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};

// so obviously, normally we would use this store as a prop to the provider tag,
// which would wrap our staticrouter tag in renderer.js.
// But on the server, we need some way to detect when all the initial data
// load action creators are completed.
// we're gonna create the store in our route handler in index.js, and after we have done
// all of our store initializtion, all the data loading inside of it, then we will pass
// the store off to the renderder, where it can be used by the provider function.
