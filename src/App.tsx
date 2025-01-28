import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './AppRoute';
//import { AuthContextProvider } from './context/auth';
import { RatingContextProvider } from './context/ratings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  return (
    <> 
        <Router>
            
            <RatingContextProvider>
                <AppRoute />
                <ToastContainer />
            </RatingContextProvider>
               
              
            
        </Router>
    </>
  );
}

export default App;
