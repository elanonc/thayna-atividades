import './summary.css'

function Summary({ pecas, selecionado, total })  {
    const getNomePeca = (lista, id) => {
      const item = lista.find((p) => p.id === id);
      return item ? item.nome : 'Não selecionado';
    };

    return (
    <div className="summary-container">
      <h3>Resumo da configuração:</h3>
      <p className="summary-line"><span>Processador:</span><span>{getNomePeca(pecas.processadores, selecionado.processador)}</span></p>
      <p className="summary-line"><span>Memória RAM:</span><span>{getNomePeca(pecas.memoriasRAM, selecionado.memoria)}</span></p>
      <p className="summary-line"><span>Armazenamento:</span><span>{getNomePeca(pecas.armazenamentos, selecionado.armazenamento)}</span></p>
      <hr />
      <p className="summary-line total">
        Preço Total: R$ {total.toFixed(2)}
      </p>
    </div>

    );
  }

export default Summary;
