import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase-config';
import { ref, onValue } from 'firebase/database';
import './DetalhesPokemon.css';

export default function DetalhesPokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const pokemonsRef = ref(db, 'pokemons');

    const unsubscribe = onValue(
      pokemonsRef,
      (snapshot) => {
        try {
          const dados = snapshot.val();
          if (dados) {
            const lista = Object.values(dados);
            const pokemonEncontrado = lista.find((p) => String(p.numero) === id);
            setPokemon(pokemonEncontrado || null);
          } else {
            setPokemon(null);
          }
          setLoading(false);
        } catch (erro) {
          console.error("Erro ao carregar dados:", erro);
          setErro("Erro ao carregar Pokémon");
          setLoading(false);
        }
      },
      (err) => {
        console.error("Erro de conexão com o Firebase:", err);
        setErro("Erro ao conectar com o banco de dados.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [id]);

  if (loading) return <p>Carregando Pokémon...</p>;
  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;
  if (!pokemon) return <p>Pokémon não encontrado.</p>;

  return (
    <div className='detalhes-container'>
      <h2>{pokemon.nome} - #{pokemon.numero}</h2>
      <img src={pokemon.imagem} alt={pokemon.nome} width="200" />
      <p><strong>Tipo:</strong> {pokemon.tipo}</p>
      <p><strong>Altura:</strong> {pokemon.altura}</p>
      <p><strong>Peso:</strong> {pokemon.peso}</p>
      <p><strong>Região:</strong> {pokemon.regiao}</p>
      <p><strong>Descrição:</strong> {pokemon.descricao}</p>
      <p><strong>Habilidades:</strong> {pokemon.habilidades?.join(', ')}</p>
      <p><strong>Fraquezas:</strong> {pokemon.fraquezas?.join(', ')}</p>
    </div>
  );
}
