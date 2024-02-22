import React from 'react';
import Logo from './components/Logo';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Title />
        <SearchBar />
        <div className="recipe-container">
          <Recipe 
            imageUrl="imagen.png" 
            title="Título de la receta 1" 
            description="Descripción más detallada de la receta 1."
          />

          <Recipe 
            imageUrl="imagen.png" 
            title="Título de la receta 2" 
            description="Descripción más detallada de la receta 2."
          />

          <Recipe 
            imageUrl="imagen.png" 
            title="Título de la receta 3" 
            description="Descripción más detallada de la receta 3."
          />

          <Recipe 
            imageUrl="imagen.png" 
            title="Título de la receta 4" 
            description="Descripción más detallada de la receta 4."
          />

          
        </div>
      </header>
    </div>
  );
}

export default App;
