import React, {useState} from "react";
import {generate as id} from "shortid";
import ListContext from './context/ListContext';
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import FilterProvider from "./components/FilterProvider";
import Filter from "./components/Filter";
import Title from "./components/Title";

import {defaultState} from "./data";

const App = (props) => {

    const [items, setItems] = useState(props.items);


    const addItem = value => {
        if (items.filter((item) =>
            item.value.toLowerCase().includes(value.toLocaleLowerCase())).length)
            return;
        const newItems = items.concat({
            value: value,
            id: id(),
            packed: false
        })
        setItems(newItems)
    }

    const deleteItem = id => {
        const newItems = items.filter(i => i.id !== id)
        setItems(newItems)
    }

    const unpackAll = () => {
        const newItems = items.map(i => {
            if (i.packed)
                i.packed = !i.packed
            return i
        })
        setItems(newItems)
    }

    const updateItemStatus = id => {
        const newItems = items.map(i => {
            if (i.id === id)
                i.packed = !i.packed
            return i
        })
        setItems(newItems)
    }

    const itemsPacked = items.filter(item => item.packed)
    const itemsUnpacked = items.filter(item => !item.packed)

    return (
        <div className="container py-3">
            <ListContext.Provider value={{addItem, deleteItem, updateItemStatus}}>
                <NewItem/>
                <div className="row">
                    <div className="col-md-5">
                        <FilterProvider>
                            <Title className="mb-3">Unpacked Items</Title>
                            <Filter/>
                            <ListItems items={itemsUnpacked}/>
                        </FilterProvider>
                    </div>
                    <div className="offset-md-2 col-md-5">
                        <FilterProvider>
                            <Title className="mb-3">Packed Items</Title>
                            <Filter/>
                            <ListItems items={itemsPacked}/>
                        </FilterProvider>
                        <button className="btn btn-danger btn-lg btn-block" onClick={unpackAll}>
                            Mark All As Unpacked
                        </button>
                    </div>
                </div>
            </ListContext.Provider>
        </div>
    );

}

App.defaultProps = {items: defaultState};

export default App;
