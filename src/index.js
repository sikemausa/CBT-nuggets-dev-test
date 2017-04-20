import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Route } from 'react-router-dom';
import rootReducer from './reducers';
import { Home, Profile, Hi } from './components/pages';
import './style/index.scss';

const history = createHistory();

const middleware = composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware
    )
);

const store = createStore(
    rootReducer,
    middleware
);

store.dispatch({ type: 'INIT' });

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:id" component={Profile} />
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
  /*eslint-disable */
    document.getElementById('root')
  /*eslint-enable */
);
