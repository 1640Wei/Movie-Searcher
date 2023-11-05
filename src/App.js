import './App.css';
import { useEffect } from 'react';

//API key:359ac4a5

const API_URL = "http://www.omdbapi.com?apikey=359ac4a5";

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect (() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="App">
        <h1>App</h1>
    </div>
  );
}

export default App;
