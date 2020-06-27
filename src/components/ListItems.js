import React, {Component} from "react";
import Item from "./Item";
import Filter from "./Filter";

class ListItems extends Component {
    state = {
        filter: ''
    };

    updateFilter = searchTerm => {
        const {value} = searchTerm.target
        this.setState({filter: value})
    };

    render() {
        const {title, items, handleDelete, handlePack} = this.props;
        const {filter} = this.state
        return (
            <section>
                <h3 className="mb-3">{title}</h3>
                <Filter filter={this.state.filter} onChange={this.updateFilter}/>
                <ul className="mb-3 p-0">
                    {items
                        .filter((item) =>
                            item.value.toLowerCase().includes(filter.toLocaleLowerCase()))
                        .map((item) =>
                            <Item key={item.id} item={item} handleDelete={handleDelete}
                                  handlePack={handlePack}/>)}

                </ul>
            </section>
        );
    }
}

export default ListItems;
