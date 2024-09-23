export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("Formato do nome não é válido");
    }
    this.#nome = novoNome;
  }

  set email(novoEmail) {
    this.#email = novoEmail;
  }

  set nascimento(novoNascimento) {
    this.#nome = novoNascimento;
  }

  set role(novoRole) {
    this.#role = novoRole;
  }

  set ativo(novoAtivo) {
    this.#ativo = novoAtivo;
  }

  // exibirInfos() {
  //   return `${this.nome}, ${this.email}`;
  // }

  exibirInfos(role) {
    if (this.role === "estudante") {
      return `dados estudante: ${this.nome}`;
    }
    if (this.role === "admin") {
      return `dados admin: ${this.nome}, ${this.role}`;
    }
    if (this.role === "docente") {
      return `dados docente: ${this.nome}, ${this.email}`;
    }
  }

  // Pode ser usado sem instanciar
  static exibirInfosGenericas(nome, email) {
    return `${nome}, ${email}`;
  }
}


// const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// true, é uma implementação de um protótipo por baixo, ou seja
// novoUser é um prototipo de User
// console.log(User.prototype.isPrototypeOf(novoUser));


