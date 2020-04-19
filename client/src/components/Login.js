import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

const Login = (props) => {

    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const [user, setUser] = useState([
                        {email: 'rohit@gmail.com', password:'123456'},
                        {email: 'example@gmail.com', password:'zxcvbnm'},
                        {email: 'example2@gmail.com', password:'example2'}]);
    //setting data in local storage
    sessionStorage.setItem('user', JSON.stringify(user));

    const  onSubmit = (data) => {
        console.log(data);
        var users = sessionStorage.getItem('user');
        var result =JSON.parse(users);
        console.log(result)
        for(var i=0; i<result.length; i++)
            {
                var succeded = result[i].email === data.email && result[i].password === data.password;
                if(succeded){
                  alert("Successfully login!")
                 var a= console.log('successfully Login!')
                  var b =sessionStorage.setItem('loginData', 'ehbfhjrebflekfb');
                  var c = history.push("/home", result[i].email)
                  return {a,b,c}
                } 
            } 
            if(!succeded){
                return alert("Wrong Id or Password!")
             
            }
    }

    return (
    <div>
      <br/>
      <br/>
      <Container>
        <Row>
          <Col></Col>
          <Col>
          <h1 style={{color: 'red'}}>Login Here!</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" ref={register({required: true})}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {errors.email && alert("Please Enter Email!")}

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password"
                  ref={register({required: true})}/>
              </Form.Group>
              {errors.password && alert("Please Enter Correct Password!!!")}
              
              <Button variant="primary" type="submit">
                Login
              </Button>
          </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
    )
}

export default Login
