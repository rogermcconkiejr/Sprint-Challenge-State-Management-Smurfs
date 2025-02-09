import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
//components
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import FormikForm from './FormikForm';
//contexts

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

    axios
      .get(`http://localhost:3333/smurfs`, {
      })
      .then(response => {
        const smurf = response.data;
        console.log('smurf:', smurf);
        setSmurfs(smurfs);
      });

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs />
        <FormikForm />
      </div>
    );
  }


export default App;
