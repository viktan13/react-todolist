import React from 'react';

const TrashListItem = (props) => {
    return (
        <li>
            {props.trashItem.name}
        </li>
    );
};

export default TrashListItem;