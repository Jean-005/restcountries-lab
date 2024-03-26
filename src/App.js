import React from 'react';
import CountryContainer from './containers/CountryContainer';
import './App.css';

const App = () => {
    return (
      <div className="App">
      <header className="App-header">
            <h1>Country Bucket List</h1>
            <CountryContainer />
            </header>
        </div>
    );
};

export default App;


