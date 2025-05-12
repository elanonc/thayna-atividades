async function carregarPersonagens() {
  try {
      const response = await fetch('https://hp-api.onrender.com/api/characters/staff');
      const data = await response.json();
      mostrarPersonagens(data);
  } catch (error) {
      document.getElementById('personagens').innerHTML = '<p>Erro ao carregar os personagens</p>';
      console.log(error);
  }
}

function mostrarPersonagens(personagens) {
  const container = document.getElementById('personagens');

  personagens.forEach(personagem => {
      const card = document.createElement('div');
      card.className = 'card';

      const imagem = personagem.image;

      card.innerHTML = `
          <img src="${imagem}" alt="${personagem.name}">
          <h2>${personagem.name}</h2>
          <p><strong>Espécie:</strong> ${personagem.species}</p>
          <p><strong>Casa:</strong> ${personagem.house}</p>
          <p><strong>Ancestralidade:</strong> ${personagem.ancestry}</p>
      `;

      container.appendChild(card);
  });
}

carregarPersonagens();