const user = {
  nome: 'Juliana',
  email: 'j@j.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,
  // não pode ser com arrow function, pois ele não sabe lidar com contextos
  exibeInfos: function () {
    console.log(this.nome, this.email);
  }
}

//user.exibeInfos()

// const exibir = user.exibeInfos;
// exibir();

// não pode ser com arrow function, pois ele não sabe lidar com contextos
const exibir = function () {
  console.log(this.nome, this.email);
}

// o bind pega o contexto que são as sua propriedades.
const exibirNome = exibir.bind(user)
exibirNome();