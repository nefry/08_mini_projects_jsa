import React, {createContext} from "react";

const FilterContext = createContext({
    filter: '',
    onChange: (e) => {
        const {value} = e.target
        this.filter = value
    }
})

export default FilterContext;