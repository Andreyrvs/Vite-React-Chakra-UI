import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Center,
  Box,
  IconButton,
  Container,
} from '@chakra-ui/react'
import { EmailIcon, StarIcon } from '@chakra-ui/icons'


function Form(props) {
  const [input, setInput] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)
  const handleInputPassword = (e) => setInputPassword(e.target.value)
  const isError = input === ""

  return (
    <>
      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        <Box w='sm' m='10' boxShadow='2xl' rounded='md' bg='white' p='7'>
          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Flex>
              <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Send email'
                  icon={<EmailIcon />}
                  />
              <Input
                type='email'
                value={input}
                onChange={handleInputChange}
                />
                </Flex>
              {!isError ?
              (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is require.</FormErrorMessage>
                )}
            <FormLabel>Password</FormLabel>
            <Flex>
            <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Send email'
                  icon={<StarIcon />}
                  />
            <Input 
              type="password"
              value={inputPassword}
              onChange={handleInputPassword}
              />
              </Flex>
          </FormControl>
        </Box>
      </Flex>
    </>
  )
}


export default Form
