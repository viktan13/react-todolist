import React, {useState} from 'react';

const Update = (props) => {

    const [value, setValue] = useState(props.listItem.name);
    const [hidden, setHidden] = useState(false)

    const onCancel = () => {
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
            <button hidden={hidden} onClick={() => props.updateTodo(props.listItem.id, value)}>Save</button>
            <button hidden={hidden} onClick={onCancel}>Cancel</button>
        </>
    );
};

export default Update;