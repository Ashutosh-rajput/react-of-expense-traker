import React, { useState } from 'react';
import './LoginPage.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login submission
    console.log('Login form submitted:', username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup submission
    console.log('Signup form submitted:', username, password, confirmPassword, email, fullName, phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <br />
      <input
        type="password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Confirm Password"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        placeholder="Full Name"
      />
      <br />
      <input
        type="text"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Phone"
      />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

const LoginPage = () => {
  const [mode, setMode] = useState('login');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <section>
      <header>
        <button onClick={() => handleModeChange('login')}>Login</button>
        <button onClick={() => handleModeChange('signup')}>Sign Up</button>
      </header>
      {mode === 'login' ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
    </section>
  );
};

export default LoginPage;
