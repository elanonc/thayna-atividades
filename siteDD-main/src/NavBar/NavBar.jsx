import React from 'react';
import './NavBar.css'; // já que você disse que o CSS já está pronto
import { BsSearch } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";



function Navbar() {
  const adminName = "Laryssa";
  return (
    <header className="nav-bar">
      <a href=""><img className="logo" src="logo.svg" alt="Logo" />EXPO DESIGN</a>
      <div className="search-bar">
          <span className="search-icon"><BsSearch/></span>
          <input type="text" placeholder="Pesquisar por títulos, autores, tags..."/>
      </div>
      <nav>
            <a href="#">PROJETOS</a>
            <a href="#">SOBRE O SITE</a>
            <button className="submit-project">EXPOR PROJETO</button> {/*Não sei se deixo assi*/}

            {/* <div> */}
              {/* <a className='hello-admin' href="#" >Olá, {adminName}!</a>   */}
              {/*Laryssa recomendou que o Olá admin fosse um botão, que na tela do user mudaria para o EXPOR AQUI*/}

            {/* *****************EXCLUIR ESSE COMENTARIO DEPOIS***********************
              Eu comentei a div que tava aqui só de enfeite e adicionei o span pra adicionar a linha como tava no protótipo.
            */}
              <a className="hello-admin" href="#">
                <span className="underline-text">Olá, {adminName}!</span>
              </a>

            {/* </div> */}

            <button className="log-out"><BsBoxArrowRight /></button> {/*acho que Olá, admin e o button deveriam ser separados em outra div*/}

      </nav>
    </header>
  );
}

export default Navbar;
