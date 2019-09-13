import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

//contexts
import { SmurfContext } from '../contexts/SmurfContext';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`, {
        params: {}
      })
      .then(response => {
        const smurf = response.data;
        console.log('smurf:', smurf);
        setSmurfs(smurfs);
      });
  }, []);

      

    return (
      <div className="App">
        <SmurfContext.Provider value = { smurfs }>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        </SmurfContext.Provider>
      </div>
    );
  }


export default App;
