'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllLiosContainer from './components/all-lios/AllLiosContainer';
import SingleLioContainer from './components/single-lio/SingleLioContainer';
import Layout from './components/layout';
import Home from './components/Home'
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { loadBrunchPlaces, loadOneBrunch, loadPhoto, selectPhoto } from './action-creators';



const onLiosEnter = function (location) {
  const thunk = loadLios(location);
  store.dispatch(thunk);
};

const onLioEnter = function (nextRouterState) {
  const lioId = nextRouterState.params.lioId;
  const thunk = loadOneLio(lioId);
  store.dispatch(thunk);
};

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div className="jumbotron">
        <Router history={ hashHistory }>
          <Route path="/" component= {Layout}>
            <Route path="home" component={Home} />
            <Route path="lios/:location" component={AllLiosContainer} onEnter={onLiosEnter} />
            <Route path="lio/:lioId" component={SingleLioContainer} onEnter={onLioEnter} />
            <IndexRoute component={Home}  />
          </Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
