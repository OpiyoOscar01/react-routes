import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Layout from './Layout'
import { About } from './About'
import { Products } from './Products'
import { productLoader } from './Loaders'
import Login from './Login'
import Dashboard from './Dashboard'
import ProtectedRoute from './ProtectedRoute'


function App() {
  return (

<BrowserRouter>
  <Routes>
  <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
          <Route path='/' element={<Layout />}>
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='products' element={<Products />} loader={productLoader} />

    </Route>
  </Routes>

</BrowserRouter>  )
}

export default App

/**
 * // App.jsx
import React, { useState, useRef } from 'react';
import Popover from './Popover';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();

  const togglePopover = () => setIsOpen(!isOpen);

  const getPosition = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    return {
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
    };
  };

  return (
    <div className="p-10">
      <button ref={buttonRef} onClick={togglePopover} className="bg-blue-500 text-white p-2 rounded">
        Toggle Popover
      </button>

      {isOpen && (
        <Popover onClose={() => setIsOpen(false)} position={getPosition()}>
          <p>This is a popover via portal!</p>
        </Popover>
      )}
    </div>
  );
}

export default App;

 */