import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`;
  }

  reprovarEstudante() {

  }
}

// const novaDocente = new Docente("Ana", "a@a.com", "2024-01-01");
// console.log(novaDocente);
// console.log(novaDocente.aprovarEstudante("Juliana", "Javascript"));
