import "./TelaUsuarios.css";

function TelaUsuarios() {
  const usuarios = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      telefone: "(18) 99999-1111",
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      email: "maria@email.com",
      telefone: "(18) 99999-2222",
    },
    {
      id: 3,
      nome: "Pedro Santos",
      email: "pedro@email.com",
      telefone: "(18) 99999-3333",
    },
    {
      id: 4,
      nome: "Ana Souza",
      email: "ana@email.com",
      telefone: "(18) 99999-4444",
    },
  ];

  return (
    <div className="tela-usuarios">
      <h2>Lista de Usuários</h2>

      <div className="usuarios-container">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="card-usuario">
            <h3>{usuario.nome}</h3>
            <p>Email: {usuario.email}</p>
            <p>Telefone: {usuario.telefone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaUsuarios;