import './select.css'

function Select({ label, opcoes, valorSelecionado, onChange })  {

  return (
    <div className="select-container">
      <label>{label}: </label>
      <select value={valorSelecionado} onChange={(e) => onChange(e.target.value)}>
        <option value="">Selecione</option>
        {opcoes.map((opcao) => (
          <option key={opcao.id} value={opcao.id}>
            {opcao.nome} - R$ {opcao.preco.toFixed(2)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;