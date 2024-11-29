import { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

// Components
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/account/Login';

// Private Route Component
const PrivateRoute = ({ isAuthenticated, children }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate replace to="/account" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = 'John Doe'; // Replace with actual form data
    const email = 'john@example.com'; // Replace with actual form data
    const password = 'password123'; // Replace with actual form data
    axios
      .post('https://blog-website-api-ashy.vercel.app/register', { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route path="/account" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route
              path="/"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <CreatePost />
                </PrivateRoute>
              }
            />
            <Route
              path="/details/:id"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <DetailView />
                </PrivateRoute>
              }
            />
            <Route
              path="/update/:id"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Update />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <About />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Contact />
                </PrivateRoute>
              }
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
