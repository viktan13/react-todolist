import React, {useState} from 'react';
import Update from "./Update";


const ListItem = (props) => {



    return (
        <li style={{textDecorationLine: props.listItem.done ? 'line-through' : ''}} >

            <span style={{padding: '0px 10px 0px 0px'}}> {props.listItem.name} </span>
            <Update
                listItem={props.listItem}
                updateTodo={props.updateTodo}
                doneTask={props.doneTask}
                deleteTask={props.deleteTask}
            />


        </li>
    );
};

export default ListItem;