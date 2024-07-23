import React, { useEffect } from 'react';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import {   Route} from 'react-router-redux';
import ContactForm from './components/ContactForm';
import MainComponets from './components/MainComponets';
import { Routes } from 'react-router-dom';



function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      

      <Header />
      <MainComponets/>     

     <Routes>
        <Route path="/" element={<ContactForm />}/>
     </Routes>
     
    </div>
  );
}

export default App;
