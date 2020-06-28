import React, {useState, useContext} from "react";
import ListContext from '../context/ListContext'

const NewItem = (props) => {
    const { addItem } = useContext(ListContext);
    const [value, setValue] = useState('')

    const handleChange = event => {
        const {value} = event.target
        setValue(value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        addItem(value)
        setValue('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-10">
                    <input className="form-control mb-3" type="text" value={value} onChange={handleChange}/>
                </div>
                <div className="col-md-2">
                    <input className="btn btn-success" type="submit" value="Add item"/>
                </div>
            </div>
        </form>
    );

}

export default NewItem;
