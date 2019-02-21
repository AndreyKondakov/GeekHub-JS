import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from './Slider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Slider start="0" end="2" timeout="3" />, document.getElementById('sliderTop'));
ReactDOM.render(<Slider start="3" end="6" timeout="9" />, document.getElementById('sliderBottom'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
