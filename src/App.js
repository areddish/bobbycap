import logo from './logo.svg';
import './App.css';
import './SchoolForm';
import SchoolDatesForm from './SchoolForm';
import GoogleLoginComponent from "./Login";
import {useState} from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <header><img src="/logo.png"></img></header>
      {!loggedIn && <GoogleLoginComponent onLogin={() => setLoggedIn(true)}></GoogleLoginComponent>}
      {loggedIn && <SchoolDatesForm></SchoolDatesForm>}
    </div>
  );
}

export default App;
