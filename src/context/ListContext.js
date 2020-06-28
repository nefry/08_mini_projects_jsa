import React, {createContext} from "react";


const ListContext = createContext({
    updateItemStatus: (f) => f,
    addItem: (f) => f,
    deleteItem: (f) => f
});

export default ListContext;