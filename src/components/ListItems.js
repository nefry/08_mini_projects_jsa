import React, { useContext } from "react";
import Item from "./Item";
import FilterContext from "../context/FilterContext";

const ListItems = (props) => {
    const {items} = props;
    const {filter=''} = useContext(FilterContext)

    return (
            <ul className="mb-3 p-0">
                {items
                    .filter((item) =>
                        item.value.toLowerCase().includes(filter.toLocaleLowerCase()))
                    .map((item) =>
                        <Item key={item.id} item={item}/>)}
            </ul>
    );
}


export default ListItems;
