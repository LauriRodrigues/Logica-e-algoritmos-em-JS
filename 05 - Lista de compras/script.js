
let list = [];

for(let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

   list[item] = itemName
}

alert(list)