// CLIENT ENTRY FILE
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { appStore } from './store';
import '../public/assets/styles/styles.scss';

import { Header, Footer, Main } from './components';

let store = createStore(appStore);
import { history } from './history.js';

ReactDOM.render(
  <Provider store={store}>
	  <Router path="/" history={history}>
		  <div className="App">
			  <Header path={window.location.href} />
			  <Switch>
				  <Route exact path="/" component={Main} />
				  <Route exact path="/giphy" component={Main} />
				  <Route exact path="/reddit" component={Main} />
				  <Route component={Main} />
				  <Route path='*' component={Main} />
			  </Switch>
			  <Footer />
		  </div>
	  </Router>
  </Provider>,
  document.getElementById('app')
);

