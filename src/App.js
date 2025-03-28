import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/user', { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const handleLogout = () => {
    axios.get('http://localhost:5000/auth/logout', { withCredentials: true })
      .then(() => {
        setUser(null);  // Clear the user state
        window.location.href = '/';  // Redirect to home
      })
      .catch(err => console.error("Logout failed", err));
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photos[0].value} alt="profile" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
}

export default App;