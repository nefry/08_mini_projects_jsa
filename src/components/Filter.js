import React, {Component} from 'react';

class Filter extends Component {

    render() {
        return (
            <div className="mb-3">
                <input type="text"
                       className="form-control"
                       value={this.props.filter}
                       onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Filter;
