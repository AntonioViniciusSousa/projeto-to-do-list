function concluirTarefa(checkbox) {
  const tarefa = checkbox.closest('li');
  tarefa.remove();
}

function adicionarTarefa(event) {
  event.preventDefault();
  const inputTarefa = document.querySelector('#task'); // Selecionando o input corretamente
  const textoTarefa = inputTarefa.value.trim(); // Corrigindo erro de 'trin()'

  if (textoTarefa === '') {
    alert('A tarefa precisa de um título');
    return;
  }

  const htmlTarefa = `
    <li>
      <label>
        <input type="checkbox" onclick="concluirTarefa(this)">
        ${textoTarefa}
      </label>
    </li>
  `;

  document
    .querySelector('#todo-list')
    .insertAdjacentHTML('beforeend', htmlTarefa); // Removendo 'trin()'

  inputTarefa.value = '';
}

document
  .querySelector('#form-add-todo')
  .addEventListener('submit', adicionarTarefa);
