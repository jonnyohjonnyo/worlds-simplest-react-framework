var React = require('react');
var Framework = require('worlds-simplest-react-framework');

var config = { title: 'Awesome application' };

var App = Framework.createApp(config);

console.log(App);

React.render(<App />, document.getElementById('app'));

