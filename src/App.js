import React from 'react'
import Home from './components/Home';
import Languages from './components/Languages';
import Navigation from './components/Navigation';
import Resume from './components/Resume';

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Home />
      <Resume />
      <Languages />
    </div>
  )
}

export default App;
