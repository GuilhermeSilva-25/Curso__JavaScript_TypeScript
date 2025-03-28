function meuEscopo() {
  const formulario = document.querySelector("#formulario");
  const resultado = document.querySelector("#resultado");
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;

    nome.value = '';
    sobrenome.value = '';
    peso.value = '';
    altura.value = '';
  }

  formulario.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
