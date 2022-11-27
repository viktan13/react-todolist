import React from 'react';
import TrashListItem from "./TrashListItem";

const TrashList = (props) => {
    return (
        <ol>
            {props.trash.map(el => <TrashListItem
                key={el.id}
                trashItem={el}
                removeFromTrash={props.removeFromTrash}
                backToList={props.backToList}
            />)}
        </ol>
    );
};

export default TrashList;