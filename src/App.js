import { useState, useEffect } from 'react';
import { Box, VStack } from '@chakra-ui/react';

// components import
import Header from './components/Header.jsx'
import AddTodo from './components/AddTodo.jsx';
import Todos from './components/Todos.jsx';

////////
// const initialtodos = [
//   {
//     id: 12,
//     text: "hello from my heart"
//   },
//   {
//     id: 22,
//     text: "heart"
//   }
// ]
//////

function App() {
  // const [todos, setTodos] = useState(initialtodos);
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodo);
  }

  return (
    <VStack >
      <Header />
      <Box
        w='100%'
        // making it responsive small screen par left right blankspace(padding)
        // kum and large screeen main padding zada
        maxW={{ base: '80vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      >
        <AddTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </Box>
    </VStack>
  );
}

export default App;
