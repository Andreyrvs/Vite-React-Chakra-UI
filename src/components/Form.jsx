import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
} from '@chakra-ui/react';
import { EmailIcon, StarIcon } from '@chakra-ui/icons';

function Form() {
  const [input, setInput] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);
  const handleInputPassword = (e) => setInputPassword(e.target.value);
  const isError = input === '';
  const isErrorPassword = inputPassword === '';

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box w="sm" m="10" boxShadow="2xl" rounded="md" bg="white" p="7">
        <FormControl isInvalid={isError}>
          <FormLabel>Email</FormLabel>
          <Flex flexDirection="column">
            <Flex flexDirection="row">
              <EmailIcon color="teal" w={10} h={10} p={2} />
              <Input
                type="email"
                value={input}
                onChange={handleInputChange}
              />
            </Flex>
            <Box>
              {!isError
                ? (
                  <FormHelperText>
                    Email deve ter o formato exemplo@email.com.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is require.</FormErrorMessage>
                )}
            </Box>
          </Flex>
          <FormLabel>Password</FormLabel>
          <Flex flexDirection="column">
            <Flex lexDirection="row">
              <StarIcon color="teal" w={10} h={10} p={2} />
              <Input
                type="password"
                value={inputPassword}
                onChange={handleInputPassword}
              />
            </Flex>
            <Box>
              {!isErrorPassword
                ? (
                  <FormHelperText>
                    Password deve ter no minimo 5 caracteres.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Password is require.</FormErrorMessage>
                )}
            </Box>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
}

export default Form;
