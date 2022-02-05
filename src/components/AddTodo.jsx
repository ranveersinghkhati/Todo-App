import { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from 'nanoid';

const AddTodo = ({ todos, setTodos }) => {
    // creatting a state todo ->state is read-only cannot update it directly so we use a fuction
    // (here setTodo) to update state
    const [todo, setTodo] = useState('');
    const toast = useToast();
    const handleChange = (e) => {
        setTodo(e.target.value);
        console.log(todo);
    }

    const addTodo = () => {
        if (!todo) {
            // if todo is empty
            toast({
                title: "No Todo item to Add",
                status: "error",
                duration: 3000,    //3sec
                isClosable: true  // cross button
            })
            return;
        };
        const newTodo = {
            id: nanoid(),
            text: todo
        }
        setTodos([...todos, newTodo]);
        setTodo('')
    }

    return (
        <HStack>
            <Input
                placeholder="Add todo item..."
                variant="filled"
                // creating controlled component
                value={todo}
                onChange={(e) => handleChange(e)}
            />
            <Button
                colorScheme="blue"
                px={8}
                // padding along x axis means top bottom padding 0 left right padding 8
                onClick={() => addTodo()}
            >
                Add Todo
            </Button>
        </HStack>
    )
}

export default AddTodo;