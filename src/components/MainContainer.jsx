import React, { useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import TodoElement from './TodoElement';

const MainContainer = () => {

  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewToDo] = useState('');
  const [idGen, setIdGen] = useState(1000);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [updateItem, setUpdateItem] = useState('');

  // Intital load of resources - limiting to 10 items only
  useEffect(() => {
    const temp = []
    if (todoList.length == 0)
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {

          for (let i = 0; i < 10; i++) {
            temp.push(json[i]);
          }

          setTodoList(temp);
          setLoading(false);
        })

  }, [])

  // Task complete/incomplete toggle
  const toggleCompleted = (item) => {

    const updatedList = todoList.map((element => {
      if (item.id === element.id) {
        item.completed = !item.completed;
      }
      return element;
    }));

    setTodoList(updatedList);
  }

  // Delete an item from list and update accordingly
  const deleteItem = (item) => {

    const updatedList = todoList.filter((element => {
      if (item.id !== element.id) {
        return true;
      }
    }));

    setTodoList(updatedList);
  }

  // Add new todo item in an array
  const addItemToDo = () => {
    if (newTodo) {
      setLoading(true);
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newTodo
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          json.id = idGen;
          json.completed = false;
          setIdGen(idGen + 1);

          const newToDoList = [...todoList];
          newToDoList.push(json);
          setTodoList(newToDoList);
          setNewToDo('');
          setLoading(false);
        });
    }
  }

  // Edit the title of todo item 
  const editItem = () => {
    if (newTodo) {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${updateItem.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: newTodo,
          completed: updateItem.completed
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          const updatedList = todoList.filter((element => {
            if (json.id === element.id) {
              element.title = json.title;
              element.completed = json.completed;
            }
            return true;
          }));

          setTodoList(updatedList);
          setNewToDo('');
          setUpdateItem('');
          setLoading(false);
          setToggleBtn(!toggleBtn);
        });
    }else{
      setNewToDo('');
      setUpdateItem('');
      setToggleBtn(!toggleBtn);
    }
  }

  return (
    <>
      <div className="flex justify-center h-1/6">
        <div>
          <input onChange={(e) => setNewToDo(e.target.value)} value={newTodo} type="text" placeholder='Enter a Todo' className='w-2/3 px-5 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black' />
          {toggleBtn ?
            <button onClick={editItem} className='bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-lg font-semibold px-2 py-1 mx-2 rounded-md'>Update</button> :
            <button onClick={addItemToDo} className='bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-lg font-semibold px-2 py-1 mx-2 rounded-md'>Add</button>
          }
        </div>
      </div>
      <div className='flex overflow-y-auto flex-col md:flex-row md:flex-wrap items-center md:items-start justify-start md:justify-evenly h-4/6'>
        {loading ? <Vortex /> :
          todoList.map(item => <TodoElement item={item} deleteItem={deleteItem} toggleCompleted={toggleCompleted} key={item.id} setToggleBtn={setToggleBtn} newTodo={newTodo} setNewToDo={setNewToDo} setUpdateItem={setUpdateItem} />)
        }
      </div>
    </>
  )
}

export default MainContainer