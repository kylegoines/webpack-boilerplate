import React from 'react';
import reactDOM from 'react-dom';

import module from './thing.js';
import App from './js/testComponent.js';

console.log('Webpack loaded!');
console.log('React loaded!');

const webpackTest = document.getElementById('webpack')
const reactTest = document.getElementById('react')

webpackTest.innerHTML ='loaded!';
reactDOM.render(<App/>, reactTest);

module();