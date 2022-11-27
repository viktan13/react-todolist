import Header from "./Header";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import List from "./List";
import CreateTask from "./CreateTask";
import './App.css'


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
            done: true,
        },
        ]
    );

    const updateTodo = (id, name) => {
        const newList = todos.map(el => el.id === id ? {...el, name} : el);
        setTodos(newList);
    }

    function addNewTask(task){
        setTodos([...todos, {id: uuidv4(), done: false, name: task}]);
    }

  return (
    <div className="App">
        <Header appName={appName} />
        <div className='forGrid'>
            <CreateTask addNewTask={addNewTask}/>
            <List todos={todos} updateTodo={updateTodo}/>
        </div>
    </div>
  );
}

export default App;
