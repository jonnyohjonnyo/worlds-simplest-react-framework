var React = require('react');
var Framework = require('./framework');

var config = { title: 'Awesome application' };

var App = Framework.createApp(config);

console.log(App);

React.render(<App />, document.getElementById('app'));

