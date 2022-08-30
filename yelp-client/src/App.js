import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/Auth/LoginPage'
import RegPage from './components/Auth/RegPage'


function App() {
  const [authState, setAuthState] = useState(false)
  return (
    <div className="App">
      <NavBar authState={authState} setAuthState={setAuthState} />
      <Routes>
        <Route path="/login" element={<LoginPage />} setAuthState={setAuthState}/>
        <Route path="/registration" element={<RegPage />} setAuthState={setAuthState}/>
      </Routes>
    </div>
  );
}

export default App;
