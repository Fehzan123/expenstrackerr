import React, { useState } from 'react';
import './Login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Signing in with', email, password);
  };

  const handleJoin = (e) => {
    e.preventDefault();
    // Add join logic here
    console.log('Joining with', email, password);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Hobbycue</h1>
      </header>
      <main className="main-content">
        <section className="intro">
          <h2>Explore your hobby or passion</h2>
          <p>
            Explore the diverse world of hobbies and connect with people who share your interests.
            Join a community of like-minded individuals and discover new hobbies, skills, and passions.
          </p>
        </section>
        <section className="sign-in-join">
          <div className="sign-in">
            <h3>Sign In</h3>
            <form onSubmit={handleSignIn}>
              <input
                type="email"
                placeholder="Continue with Google"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Continue with Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="join">
            <h3>Join In</h3>
            <form onSubmit={handleJoin}>
              <input
                type="email"
                placeholder="Continue with Google"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Continue with Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
