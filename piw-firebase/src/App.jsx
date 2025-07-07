import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CadastrarPokemon from "./components/CadastrarPokemon"
import DetalhesPokemon from "./components/DetalhesPokemon"
import ListarPokemons from "./components/ListarPokemons"
// import TestarBancoDados from "./components/testarBancoDeDados"

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Projeto Pokémon Firebase</h1>
          <nav>
            <Link to="/listar">Listar Pokémons</Link> |{' '}
            <Link to="/cadastrar">Cadastrar Pokémon</Link>
          </nav>

          <Routes>
            <Route path="/listar" element={<ListarPokemons />} />
            <Route path="/cadastrar" element={<CadastrarPokemon />} />
            <Route path="/detalhes/:id" element={<DetalhesPokemon />} />
            <Route
              path="*"
              element={<p style={{ marginTop: 20 }}>Página não encontrada</p>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
