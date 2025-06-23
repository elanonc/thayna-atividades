import { useEffect, useState } from 'react'
import './App.css'
import Select from './components/select';
import Summary from './components/summary';

const pecas = {
  processadores: [
    { id: 'p1', nome: 'Intel Core i5', preco: 850.0 },
    { id: 'p2', nome: 'Intel Core i7', preco: 1350.0 },
    { id: 'p3', nome: 'AMD Ryzen 5', preco: 800.0 },
    { id: 'p4', nome: 'AMD Ryzen 7', preco: 1250.0 },
  ],
  memoriasRAM: [
    { id: 'm1', nome: '8GB DDR4', preco: 250.0 },
    { id: 'm2', nome: '16GB DDR4', preco: 450.0 },
    { id: 'm3', nome: '32GB DDR4', preco: 900.0 },
  ],
  armazenamentos: [
    { id: 'a1', nome: 'SSD 240GB', preco: 200.0 },
    { id: 'a2', nome: 'SSD 480GB', preco: 350.0 },
    { id: 'a3', nome: 'HD 1TB', preco: 300.0 },
  ],
};

function App() {

  const [selecionado, setSelecionado] = useState({
    processador: '',
    memoria: '',
    armazenamento: '',
  });

  function handleChange(categoria, valor) {
    setSelecionado((prev) => ({
      ...prev,
      [categoria]: valor,
    }));
  }

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getPreco = (lista, id) => {
      const item = lista.find((p) => p.id === id);
      return item ? item.preco : 0;
    };

    const precoTotal =
      getPreco(pecas.processadores, selecionado.processador) +
      getPreco(pecas.memoriasRAM, selecionado.memoria) +
      getPreco(pecas.armazenamentos, selecionado.armazenamento);

    setTotal(precoTotal);
  }, [selecionado]);

  return (
    <div className="container">
      <h1>Monte seu PC</h1>

      <Select
        label="Processador"
        opcoes={pecas.processadores}
        valorSelecionado={selecionado.processador}
        onChange={(valor) => handleChange('processador', valor)}
      />
      <Select
        label="Memória RAM"
        opcoes={pecas.memoriasRAM}
        valorSelecionado={selecionado.memoria}
        onChange={(valor) => handleChange('memoria', valor)}
      />

      <Select
        label="Armazenamento"
        opcoes={pecas.armazenamentos}
        valorSelecionado={selecionado.armazenamento}
        onChange={(valor) => handleChange('armazenamento', valor)}
      />

      <Summary pecas={pecas} selecionado={selecionado} total={total} />
    </div>
  );
}

export default App;