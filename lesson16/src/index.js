import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from './Slider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Slider start={0} end={2} timeout={3} />, document.getElementById('sliderTop'));
ReactDOM.render(<Slider start={3} end={5} timeout={6} />, document.getElementById('sliderBottom'));

ReactDOM.render(<Slider start={0} end={2} timeout={6} />, document.getElementById('sliderTop2'));
ReactDOM.render(<Slider start={3} end={5} timeout={3} />, document.getElementById('sliderBottom2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
