import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUpForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
        name,
      }),
    }).then((r) => {
      setIsLoading(false);
      setEmail('')
      setName('');
      setPassword('');
      setPasswordConfirmation('');
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Form
        style={{ width: "500px" }}
        className="mx-auto"
        onSubmit={handleSubmit}
        id="new-user-form"
      >
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            placeholder='First Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder='Password'          
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder='Confirm Password'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </Form.Group>
        {/* <Form.Group>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </Form.Group> */}
      </Form>
    </>
  );
}

export default SignUpForm;
