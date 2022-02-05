import { VStack, StackDivider } from "@chakra-ui/react";
// component
import Todo from './Todo.jsx';
import EmptyTodo from "./EmptyTodo.jsx";

const Todos = ({ todos, deleteTodo }) => {
    return (
        <VStack
            borderWidth={todos.length > 0 ? '1px' : 'none'}
            alignItems='stretch'
            mt={8}
            divider={< StackDivider />}
        >
            {/*  looping todos */}
            {
                todos.length > 0 ? todos.map(todo => (
                    <Todo todo={todo} deleteTodo={deleteTodo} />
                )) : <EmptyTodo />
            }
        </VStack >
    )
}

export default Todos