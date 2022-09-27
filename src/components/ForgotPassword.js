import React,{useRef,useState} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {Form , Button , Card , Alert} from 'react-bootstrap';


function ForgotPassword() {
    const emailRef=useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e){
        e.preventDefault();
        try{
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check our inbox for further instruction');
        }
        catch{
            setError('Failed to Reset Password');
        }
    }
    return (
        <>
          <Card>
            <Card.Body>
                <h2 className="test-center mb-4">Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    
                    <Button disabled={loading} className='w-100 mt-4' type="submit">Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                 <Link to='/login'>Log In</Link>      
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Not a user? <Link to='/signup'>Sign Up</Link>      
        </div>  
        </>
    )
}

export default ForgotPassword
