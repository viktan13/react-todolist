import React, {useState} from 'react';
import Update from "./Update";

const ListItem = (props) => {



    return (
        <li>
            {props.listItem.name}
            <Update listItem={props.listItem} updateTodo={props.updateTodo}/>
        </li>
    );
};

export default ListItem;