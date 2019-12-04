import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './propTypesAndOnChange';
import App3 from './PassingPropsExample';
import StateExample from './StateExample'
import LifeHooks from './eventlifehooks'
import BlinkingTextApp from './BlinkingText'
import RandomNumber from './ComponentDidMountExampleRandomNumber'
import MyRouting from './RoutingParent'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<BlinkingTextApp />, document.getElementById('root'));
ReactDOM.render(<MyRouting /> , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
