import Header from "./Header";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import List from "./List";
import CreateTask from "./CreateTask";
import './App.css'
import Trash from "./Trash";


function App() {

    const appName = 'Todo List App'

    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            name: 'Learn JS',
            done: true,
        },
        {
            id: uuidv4(),
            name: 'Learn React',
            done: false,
        },
        ]
    );

    const [trash, setTrash] = useState([]);

    const backToList = (id) => {
        const updTrashList = trash.filter(el => el.id !== id)
        setTrash(updTrashList);
        const backItem = trash.find(el => el.id === id);
        setTodos([...todos, backItem]);
    }

    const removeFromTrash = (id) => {
        const toRemove = trash.filter(el => el.id !== id);
        setTrash(toRemove);
    }

    const updateTodo = (id, name) => {
        const newList = todos.map(el => el.id === id ? {...el, name} : el);
        setTodos(newList);
    }

    function addNewTask(task){
        setTodos([...todos, {id: uuidv4(), done: false, name: task}]);
    }

    const doneTask = (id, done) => {
        const newList = todos.map(el => el.id === id ? {...el, done: !done} : el);
        setTodos(newList);
    }

    const deleteTask = (id) => {
        const newList = todos.filter(el => el.id !== id);
        setTodos(newList);
        const trashed = todos.filter(el => el.id === id);
        setTrash([...trash, ...trashed]);
    }

    return (
    <div className="App">
        <Header appName={appName} />
        <div className='forGrid'>
            <CreateTask addNewTask={addNewTask}/>
            <List
                todos={todos}
                updateTodo={updateTodo}
                doneTask={doneTask}
                deleteTask={deleteTask}
            />
        </div>
        <hr/>
        <Trash
            trash={trash}
            removeFromTrash={removeFromTrash}
            backToList={backToList}
        />
    </div>
  );
}

export default App;
