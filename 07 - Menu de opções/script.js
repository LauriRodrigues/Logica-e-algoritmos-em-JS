let list = [];
let option;

while(option != 3) {

option = Number(prompt("Olá usuário! Digite o número da opção desejada. \n1. Cadastrar um item na lista. \n2. Mostrar itens cadastrados. \n3. Sair do programa."))

  switch(option) {
    case 1 :
      let item = prompt("Digite um novo item para a lista")
      list.push(item)
    break

    case 2: 
      if(list.length == 0) {
      alert("Não existem itens cadastrados.")
      } else
        alert(list)
    break

    case 3: 
      alert("Programa finalizado.")
    break

    default:
      alert("Opção inválida. Tente novamente.")
  }
}
