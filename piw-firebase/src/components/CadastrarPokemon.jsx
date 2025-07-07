import { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { db } from '../firebase/firebase-config';
import './CadastrarPokemon.css';

export default function CadastrarPokemon() {
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [tipo, setTipo] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [descricao, setDescricao] = useState('');
  const [regiao, setRegiao] = useState('');
  const [fraquezas, setFraquezas] = useState('');

  async function cadastrarPokemonFirebase() {
    try {
      const novoPokemon = {
        numero: Number(numero),
        nome,
        imagem,
        tipo,
        altura: parseFloat(altura),
        peso: parseFloat(peso),
        habilidades: habilidades.split(','),
        descricao,
        regiao,
        fraquezas: fraquezas.split(','),
      };

      const pokemonsRef = ref(db, 'pokemons');
      const novoPokemonRef = push(pokemonsRef);
      await set(novoPokemonRef, novoPokemon);

      console.log('Pokémon salvo com sucesso!');
      alert('Pokémon cadastrado com sucesso!');

      setNumero('');
      setNome('');
      setImagem('');
      setTipo('');
      setAltura('');
      setPeso('');
      setHabilidades('');
      setDescricao('');
      setRegiao('');
      setFraquezas('');
    } catch (error) {
        console.error('Erro ao salvar Pokémon:', error);
        alert('Erro ao salvar!');
    }
  }

  return (
    <div className='cadastro-container'>
      <h2>Cadastrar Pokémon</h2>

      <input placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Imagem (URL)" value={imagem} onChange={(e) => setImagem(e.target.value)} />
      <input placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
      <input placeholder="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
      <input placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
      <input placeholder="Habilidades (separadas por vírgula)" value={habilidades} onChange={(e) => setHabilidades(e.target.value)} />
      <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <input placeholder="Região" value={regiao} onChange={(e) => setRegiao(e.target.value)} />
      <input placeholder="Fraquezas (separadas por vírgula)" value={fraquezas} onChange={(e) => setFraquezas(e.target.value)} />

      <button onClick={cadastrarPokemonFirebase}>Salvar</button>
    </div>
  );
}
