// import { useState } from 'react'
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Form from './components/Form';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <Flex justifyContent="center" alignItems="center" h="2xl">
      <Box alignSelf="flex-start">
        <ToggleButton />
      </Box>
      <Form />
    </Flex>
  );
}

export default App;
