import "./card_aluno.css";

function CardAluno() {
  return (
    <div className="card-aluno">
      <h2>Nome do Aluno</h2>
      <p>Curso: Engenharia de Software</p>

      <button className="btn-perfil">
        Ver Perfil
      </button>
    </div>
  );
}

export default CardAluno;