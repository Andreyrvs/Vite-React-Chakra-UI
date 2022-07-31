import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { EmailIcon, StarIcon } from '@chakra-ui/icons';

function Form() {
  const [input, setInput] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);
  const handleInputPassword = (e) => setInputPassword(e.target.value);
  const isError = input === '';
  const isErrorPassword = inputPassword === '';

  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex>
      <Box w="sm" m="10" boxShadow="2xl" rounded="md" bg={bgColor} p="7">
        <FormControl isInvalid={isError}>
          <FormLabel display="flex" alignItems="center">
            <EmailIcon color="teal" w={5} h={5} p={1} />
            Email
          </FormLabel>
          <Flex flexDirection="column">
            <Flex flexDirection="row">
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
          <FormLabel display="flex" alignItems="center">
            <StarIcon color="teal" w={5} h={5} p={1} />
            Password
          </FormLabel>
          <Flex flexDirection="column">
            <Flex lexDirection="row">
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
          <Flex justifyContent="center" mt={4}>
            <Button colorScheme="teal" size="lg" width="100%">Login</Button>
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
}

export default Form;
