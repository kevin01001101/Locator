/// <reference path="../typings/main.d.ts" />
/// <reference path="css.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as hello from './hello';


// Remove this for production builds
require('../css/main.css');


hello.runMe();
console.log("this deal?");

interface ReactProps {
  name: string;
}

class MyReactClass extends React.Component<ReactProps, any> {
  render() {
    return (
      <div>I am the walrus.. {this.props.name}</div>
    );
  }
}

ReactDOM.render(<MyReactClass name='billy'/>, document.getElementById('myReactNode'));
