import React, {useState} from 'react';

const CreateTask = (props) => {

    const [inputValue, setInputValue] = useState('')

    const addNew = () => {
        props.addNewTask(inputValue);
        setInputValue('');
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={addNew}>Add Task</button>
        </div>
    );
};

export default CreateTask;