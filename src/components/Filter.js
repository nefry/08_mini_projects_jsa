import React, {useContext} from 'react';
import FilterContext from "../context/FilterContext";

const Filter = (props) => {
    const {filter, onChange} = useContext(FilterContext)

    return (
        <div className="mb-3">
            <input type="text"
                   className="form-control"
                   value={filter}
                   onChange={onChange}
            />
        </div>
    );

}

export default Filter;
