
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Router from './config/Router';
import store from './store';
import { getUser } from './store/services/auth';

const AppContent = () => {
  // useEffect(() => {
  //   // Check if user is already logged in on app initialization
  //   getUser();
  // }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser();

  }
}, []);

  return (
    <>
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
