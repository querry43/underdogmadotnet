import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle } from './styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: grey;
    margin: 0;
    background-image: url('/background.jpg');
    background-repeat: repeat;
    height: 100%;
  }
  
  #root {
    height: 100%;
  }
`

ReactDOM.render(<React.Fragment><GlobalStyle/><App /></React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
