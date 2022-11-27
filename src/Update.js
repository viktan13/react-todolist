import React, {useState} from 'react';

const Update = (props) => {

    const [value, setValue] = useState(props.listItem.name);
    const [hidden, setHidden] = useState(false)

    const onCancel = () => {
        setHidden(true);
    }

    const onSave = () => {
        props.updateTodo(props.listItem.id, value);
        setHidden(true);
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
        </>
    );
};

export default Update;