import { Link as ReachLink } from "react-router-dom"
import { Flex, Button, Link } from '@chakra-ui/react';

const NotFound = () => {
    return <Flex w='100%' direction={"column"} alignItems='center'  >
        <h1>404 - Page Not Found</h1>
        <Link as={ReachLink} to="/" marginTop={8}>
            <Button colorScheme="gray">Kembali ke Home</Button>
        </Link>
    </Flex>
};

export default NotFound;