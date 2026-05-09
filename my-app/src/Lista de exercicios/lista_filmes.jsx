import "./ListaFilmes.css";

function ListaFilmes() {
  const filmes = [
    {
      id: 1,
      nome: "Vingadores: Ultimato",
      categoria: "Ação",
      nota: 9.0,
    },
    {
      id: 2,
      nome: "Interestelar",
      categoria: "Ficção Científica",
      nota: 9.5,
    },
    {
      id: 3,
      nome: "O Rei Leão",
      categoria: "Animação",
      nota: 8.8,
    },
    {
      id: 4,
      nome: "Homem-Aranha",
      categoria: "Aventura",
      nota: 8.5,
    },
  ];

  return (
    <div className="container-filmes">
      <h2>Lista de Filmes</h2>

      <div className="lista-filmes">
        {filmes.map((filme) => (
          <div key={filme.id} className="card-filme">
            <h3>{filme.nome}</h3>
            <p>Categoria: {filme.categoria}</p>
            <p>Nota: {filme.nota}</p>

            <button className="btn-assistir">
              Assistir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaFilmes;