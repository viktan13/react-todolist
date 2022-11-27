import React, {useState} from 'react';
import Update from "./Update";

const ListItem = (props) => {



    return (
        <li style={{textDecorationLine: props.listItem.done ? 'line-through' : ''}}>
            {props.listItem.name}
            <Update
                listItem={props.listItem}
                updateTodo={props.updateTodo}
                doneTask={props.doneTask}
            />

        </li>
    );
};

export default ListItem;