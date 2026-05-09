import { useState } from "react";
import "./ListaTarefas.css";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Estudar React", concluida: true },
    { id: 2, nome: "Fazer exercícios de CSS", concluida: false },
    { id: 3, nome: "Criar componentes JSX", concluida: true },
    { id: 4, nome: "Revisar conteúdo da prova", concluida: false },
  ]);

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <div className="container-tarefas">
      <h2>Lista de Tarefas</h2>

      <div className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <div
            key={tarefa.id}
            className={`card-tarefa ${
              tarefa.concluida ? "concluida" : "pendente"
            }`}
          >
            <div>
              <h3>{tarefa.nome}</h3>
              <p>
                Status: {tarefa.concluida ? "Concluída" : "Pendente"}
              </p>
            </div>

            <button
              className="btn-remover"
              onClick={() => removerTarefa(tarefa.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaTarefas;