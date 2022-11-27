import React from 'react';
import TrashListItem from "./TrashListItem";

const TrashList = (props) => {
    return (
        <ol>
            {props.trash.map(el => <TrashListItem
                key={el.id}
                trashItem={el}
            />)}
        </ol>
    );
};

export default TrashList;