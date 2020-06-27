import React, {Component} from "react";
import "./Item.css";

class Item extends Component {

    handlePack = e => {
        const {item, handlePack} = this.props
        handlePack(item.id)
    }

    deleteItem = e => {
        const {item, handleDelete} = this.props
        handleDelete(item.id)
    }

    render() {
        const {item} = this.props;

        return (
            <li className="item-box">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        // defaultChecked={check}
                        checked={item.packed}
                        onChange={this.handlePack}
                        id={item.id}
                    />
                    <label className="form-check-label" htmlFor={item.id}>
                        {" "}
                        {item.value}
                    </label>
                </div>
                <button key={item.id} className="btn btn-secondary btn-sm" onClick={this.deleteItem}>
                    Remove
                </button>
            </li>
        );
    }
}

export default Item;
