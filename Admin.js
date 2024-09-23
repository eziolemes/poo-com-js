import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeCurso, qtdVagas) {
    return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
  }

  exibirInfos() {
    const infos = super.exibirInfos();
    return `Admin - ${infos}`;
  }

}

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso("Javascript", 20));

