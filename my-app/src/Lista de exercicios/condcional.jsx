import "./ListaAlunos.css";

function ListaAlunos() {
  const alunos = [
    { id: 1, nome: "João", nota: 8 },
    { id: 2, nome: "Maria", nota: 6 },
    { id: 3, nome: "Pedro", nota: 7 },
    { id: 4, nome: "Ana", nota: 5 },
  ];

  return (
    <div className="lista-alunos">
      <h2>Lista de Alunos</h2>

      {alunos.map((aluno) => (
        <div
          key={aluno.id}
          className={aluno.nota >= 7 ? "aprovado" : "reprovado"}
        >
          <p>
            {aluno.nome} - Nota: {aluno.nota}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListaAlunos;