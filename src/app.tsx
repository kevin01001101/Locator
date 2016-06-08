/// <reference path="../typings/main.d.ts" />
/// <reference path="css.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';



// Remove this for production builds
require('../css/main.css');


interface ReactProps {
  name: string;
}

class MyReactClass extends React.Component<ReactProps, any> {
  render() {
    return (
      <div>I am the egg man.. {this.props.name}</div>
    );
  }
}



interface YoloProps {
  name: string;
}

class Yolo extends React.Component<YoloProps, any> {
  render() {
    return (
      <div>I am the egg man.. {this.props.name}</div>
    );
  }
}


ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={MyReactClass} >
      <IndexRoute component={Yolo} />
    </Route>
  </Router>
), document.getElementById('myReactNode'));