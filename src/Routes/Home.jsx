import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const Home = () => {
    return (
        <div>
            <Link to="/student">
                <Button data-testid="student-btn" colorScheme='green' size='sm'>
                    All Student
                </Button>
            </Link>
        </div>
    );
};

export default Home;