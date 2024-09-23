const user = {
  nome: 'Juliana',
  email: 'j@j.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,
  // não pode ser com arrow function, pois ele não sabe lidar com contextos
  exibeInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: 'Mariana',
  email: 'm@m.com',
  nascimento: '2024-01-01',
  role: 'admin',
  criarCurso: function () {
    console.log('curso criado');
  }
}

// pega as propriedades de um objeto e atribui ao outro objeto respectivamente
// herança de protótipo
Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibeInfos();