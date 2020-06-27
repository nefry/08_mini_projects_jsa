import React, {Component} from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import {generate as id} from "shortid";

import {defaultState} from "./data";

class App extends Component {

    state = {
        items: this.props.items
    }

    addItem = value => {
        let {items} = this.state;

        if ( items.filter((item) =>
            item.value.toLowerCase().includes(value.toLocaleLowerCase())).length )
            return;

        items.push({
            value: value,
            id: id(),
            packed: false
        })

        this.setState({
            items
        })
    }

    deleteItem = id => {
        const {items} = this.state;
        const newItems = items.filter(i => i.id !== id)
        this.setState({
            items: newItems
        })
    }

    unpackAll = () => {
        let {items} = this.state;
        const newItems = items.map(i => {
            if (i.packed)
                i.packed = !i.packed
            return i
        })
        this.setState({
            items: newItems
        })
    }

    updateItemStatus = id => {
        const {items} = this.state;
        const newItems = items.map(i => {
            if (i.id === id)
                i.packed = !i.packed
            return i
        })
        this.setState({
            items: newItems
        })
    }

    render() {
        const {items} = this.state
        const itemsPacked = items.filter(item => item.packed)
        const itemsUnpacked = items.filter(item => !item.packed)
        return (
            <div className="container py-3">
                <NewItem handlerSubmit={this.addItem}/>
                <div className="row">
                    <div className="col-md-5">
                        <ListItems title="Unpacked Items" handlePack={this.updateItemStatus}
                                   handleDelete={this.deleteItem}
                                   items={itemsUnpacked}/>
                    </div>
                    <div className="offset-md-2 col-md-5">
                        <ListItems title="Packed Items" handlePack={this.updateItemStatus} handleDelete={this.deleteItem}
                                   items={itemsPacked}/>
                        <button className="btn btn-danger btn-lg btn-block" onClick={this.unpackAll}>
                            Mark All As Unpacked
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {items: defaultState};

export default App;
