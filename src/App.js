import React from 'react'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Resume from './components/Resume';

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Home />
      <Resume />
    </div>
  )
}

export default App;
