import React, {useState} from "react";
import FilterContext from "../context/FilterContext";

const FilterProvider = ({children, value = ''}) => {

    const [filter, setFilter] = useState(value)

    const onChange = e => {
        const {value} = e.target
        setFilter(value)
    };
    return (
        <FilterContext.Provider value={{filter, onChange}}>
            {children}
        </FilterContext.Provider>
    )

}

export default FilterProvider;