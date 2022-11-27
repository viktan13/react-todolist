import React from 'react';
import TrashList from "./TrashList";

const Trash = (props) => {
    return (
        <div>
            <h2>Trash</h2>
            <TrashList
                trash={props.trash}
                removeFromTrash={props.removeFromTrash}
                backToList={props.backToList}
            />

        </div>
    );
};

export default Trash;