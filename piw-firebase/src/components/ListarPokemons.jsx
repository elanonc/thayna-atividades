import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase-config';
import { ref, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';

import './ListarPokemons.css';


export default function ListarPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pokemonsRef = ref(db, 'pokemons');

    const unsubscribe = onValue(
      pokemonsRef,
      (snapshot) => {
        try {
          const data = snapshot.val();
          let lista = [];

          if (data) {
            lista = Object.keys(data).map((id) => ({
              id,
              ...data[id],
            }));
          }

          setPokemons(lista);
          setLoading(false);
          setError(null);
        } catch (err) {
          console.error('Erro ao processar dados:', err);
          setError('Erro ao processar os dados');
          setLoading(false);
        }
      },
      (err) => {
        console.error('Erro ao conectar com o Firebase:', err);
        setError('Erro ao conectar com o banco de dados');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Carregando Pokémons...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (pokemons.length === 0) return <div>Nenhum Pokémon encontrado.</div>;

  return (
    <div className='lista-container'>
      <h2>Pokémons Cadastrados</h2>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
            <Link to={`/detalhes/${pokemon.numero}`} className="pokemon-link">
          <img src={pokemon.imagem} alt={pokemon.nome} />

          <div className="pokemon-info">
              <p><strong>{pokemon.numero} - {pokemon.nome}</strong></p>
            <p><strong>Tipo:</strong> {pokemon.tipo}</p>
            <p><strong>Região:</strong> {pokemon.regiao}</p>
          </div>
            </Link>
        </div>
      ))}
    </div>
  );
}
