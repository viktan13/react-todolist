import React from 'react';

const TrashListItem = (props) => {

    function onRemove() {
        props.removeFromTrash(props.trashItem.id);
    }

    function onBack() {
        props.backToList(props.trashItem.id);
    }

    return (
        <li key={props.trashItem.id}>
            <span style={{padding: '0px 10px 0px 0px'}}> {props.trashItem.name} </span>
            <button onClick={onBack}>Back to List</button>
            <button onClick={onRemove}>Remove</button>
        </li>
    );
};

export default TrashListItem;