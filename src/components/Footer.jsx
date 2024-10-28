import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box className="footer" bg={"darkblue"} w='100%' color='white' >
            <Box className="studentName">Afista pratama</Box>
            <Box className="studentId">FS000001</Box>
        </Box>
    );
};

export default Footer;