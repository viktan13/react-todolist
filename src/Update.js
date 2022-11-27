import React, {useState} from 'react';

const Update = (props) => {

    const [value, setValue] = useState(props.listItem.name);
    const [hidden, setHidden] = useState(true)

    const onCancel = () => {
        setHidden(true);
    }

    const onSave = () => {
        props.updateTodo(props.listItem.id, value);
        setHidden(true);
    }

    const onDone = () => {
        props.doneTask(props.listItem.id, props.listItem.done);
    }

    function onDelete() {
        props.deleteTask(props.listItem.id);
    }

    return (
        <>
            <input
                hidden={hidden}
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button hidden={hidden} onClick={onSave}>Save</button>
            <button hidden={hidden} onClick={onCancel}>Cancel</button>
            <button hidden={!hidden} onClick={() => setHidden(false)}>Update</button>
            <button hidden={!hidden} onClick={onDone}>Done</button>
            <button hidden={!hidden} onClick={onDelete}>Delete</button>
        </>
    );
};

export default Update;