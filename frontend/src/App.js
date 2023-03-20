import React from 'react';
import './App.css';
import { createContext, useState } from 'react';
import FileForm from './components/FileForm';
import LastestImage from './components/LastestImage';

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext)

  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
      <div className="App">
        <FileForm />
        <LastestImage />
      </div>
    </AppContext.Provider>
  );
}

export default App;
