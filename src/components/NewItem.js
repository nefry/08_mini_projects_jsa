import React, {Component} from "react";
import {generate as id} from "shortid";

class NewItem extends Component {

    state = {
        value: ""
    };

    handleChange = event => {
        const {value} = event.target
        this.setState({value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handlerSubmit(this.state.value)
        this.setState({
            value: ''
        })
    };

    render() {
        const {value} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-10">
                        <input className="form-control mb-3" type="text" value={value} onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input className="btn btn-success" type="submit" value="Add item"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default NewItem;
