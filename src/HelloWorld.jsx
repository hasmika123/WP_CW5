import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div className="HelloWorld">
                <h1>Hello, {this.props.name}!</h1>
            </div>
        );
    }
}

export default HelloWorld;