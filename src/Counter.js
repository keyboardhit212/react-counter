import { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <p>Current count is: {this.state.count} </p>
                <button onClick={this.increment}>Add 1</button>
            </div>
        );
    }
}

export default Counter;