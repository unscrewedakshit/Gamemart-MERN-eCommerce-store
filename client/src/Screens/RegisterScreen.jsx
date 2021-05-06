import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import FormContainer from '../Components/FormContainer';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button, Row, Col} from 'react-bootstrap';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import {register} from '../Actions/userActions';

const RegisterScreen = ({location, history}) => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[message, setMessage] = useState(null);

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const {loading, error, userInfo} = userRegister;

    useEffect(() => {
        if(userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        //DISPATACH register
        if(password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(register(name,email,password));
        }
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message> }
            {error && <Message variant='danger'>{error}</Message> }
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId="email">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="name" 
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    >
                    </Form.Control>
                </Form.Group>

                <Button type="submit" varaint="primary">Register</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Existing user? <Link to={redirect? `/login?redirect=${redirect}` : '/register' }> Login </Link>
                </Col>
            </Row>

        </FormContainer>
    );
};

export default RegisterScreen;
