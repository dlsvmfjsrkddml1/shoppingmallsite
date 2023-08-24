import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser =(event)=>{
        setAuthenticate(true);

        event.preventDefault()
        console.log("login user function issue")
        navigate('/')
    }
    return (
        <Container>
        <Form onSubmit={(event)=>loginUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                Login
            </Button>
        </Form>
        </Container>
    );
};

export default Login;