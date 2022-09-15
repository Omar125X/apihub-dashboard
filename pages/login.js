import React from 'react';
import { Container, Center, Flex, Box } from '@chakra-ui/react'
import { Input, InputGroup, Button, InputRightElement, IconButton, 
         FormControl, FormLabel, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
                <IconButton h='1.75rem' size='sm' onClick={handleClick} icon={show ? <ViewOffIcon /> : <ViewIcon />} />
            </InputRightElement>
        </InputGroup>
    )
}


function LoginPage(props) {
    
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    })

    return (
        <Box h='calc(100vh)'>
            <Flex minWidth={'max-content'} minHeight={'max-content'} width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {props => (
                            <Form>
                                <Field name='email'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                                            <FormLabel htmlFor='email'>Email</FormLabel>
                                            <Input {...field} id='email' placeholder='email' />
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name='password'>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                                            <FormLabel htmlFor='password'>Password</FormLabel>
                                            <Input {...field} id='password' placeholder='password' />
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Button mt={4} colorScheme='teal' isLoading={props.isSubmitting} type='submit'>
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Flex>
        </Box>
    )
}


export default LoginPage;