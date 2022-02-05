import { Text } from '@chakra-ui/react';
const EmptyTodo = () => {
    return (
        <Text
            p={5}
            bg='red.500'
            color='white'
            borderRadius={10}
        > No Todo Ttem to Display</Text >
    )
}

export default EmptyTodo;