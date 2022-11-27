import React from 'react';
import ListItem from "./ListItem";

const List = (props) => {


    return (
        <div>
            <ol>
                {props.todos.map(el =>
                    <ListItem
                        key={el.id}
                        listItem={el}
                        updateTodo={props.updateTodo}
                    />)}
            </ol>
        </div>
    );
};

export default List;