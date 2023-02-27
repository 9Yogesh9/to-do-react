import React, { useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import TodoElement from './TodoElement';

const MainContainer = () => {

  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const temp = []
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

  const toggleCompleted = (item) => {

    const arr = todoList.map((element => {
      if (item.id === element.id) {
        item.completed = !item.completed;
      }
      return element;
    }));

    setTodoList(arr);
  }

  // const obj = {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // }

  return (
    <div className='flex overflow-y-auto flex-col md:flex-row md:flex-wrap items-center md:items-start justify-start md:justify-evenly h-4/6'>
      {loading ? <Vortex /> :
        todoList.map(item => <TodoElement item={item} toggleCompleted={toggleCompleted} key={item.id} />)
      }
    </div>
  )
}

export default MainContainer