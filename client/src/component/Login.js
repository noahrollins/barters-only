import { useState } from "react";
import LoginForm from "../component/LoginForm";
import SignUpForm from "../component/SignUpForm";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function Login({ onLogin, handleSetUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Form style={{ width: "500px" }} className="mx-auto">
            <Form.Group>
              <Button variant="secondary" className='mt-2' onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
              <Form.Text> Don't have an account? &nbsp;</Form.Text>
            </Form.Group>
          </Form>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} handleSetUser={handleSetUser}/>
          <Form style={{ width: "500px" }} className="mx-auto">
            <Form.Group>
              <Button variant="secondary" className='mt-2' onClick={() => setShowLogin(true)}>
              Log In
            </Button>
              <Form.Text> Already have an account? &nbsp;</Form.Text>
            </Form.Group>
          </Form>
        </>
      )}
    </Container>
  );
}

export default Login;
