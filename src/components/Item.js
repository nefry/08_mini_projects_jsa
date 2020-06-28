import React, {useContext} from "react";
import ListContext from "../context/ListContext";
import "./Item.css";

const Item = (props) => {
    const {item} = props;
    const {deleteItem, updateItemStatus} = useContext(ListContext)

    const handlePack = e => {
        updateItemStatus(item.id)
    }

    const handleDelete = e => {
        deleteItem(item.id)
    }

    return (
        <li className="item-box">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={item.packed}
                    onChange={handlePack}
                    id={item.id}
                />
                <label className="form-check-label" htmlFor={item.id}>
                    {" "}
                    {item.value}
                </label>
            </div>
            <button key={item.id} className="btn btn-secondary btn-sm" onClick={handleDelete}>
                Remove
            </button>
        </li>
    );
}

export default Item;
