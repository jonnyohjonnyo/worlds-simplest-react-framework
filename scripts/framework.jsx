var React = require('react');

export function createApp(config) {
    var root = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Framework Home</h1>
                <h3>{config.title}</h3>
            </div>
             );
            }
    });
    return root;
}