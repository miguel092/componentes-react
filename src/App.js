import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header'
import Footer from './componentes/footer'
import NavBar from './componentes/nav'
import Article from './componentes/article'


function App() {

  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Article titulo={"Titulo del artículo 1"} contenido={"Este articulo es para ilustrar los componentes que se pueden crear con react"}></Article>
      <Article titulo={"Titulo del artículo 2"} contenido={"Contenido de ejemplo, relacionado al articulo 2"} 
              section={true} subtitulo={"Subtitulo del articulo 2"} subcontenido={"Este párrafo pertenece al articulo numero 2 como una seccion del mismo"}></Article>
      <Footer></Footer>
    </div>
  );
}

export default App;
