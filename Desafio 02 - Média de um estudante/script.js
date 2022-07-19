const students = [
  {
    name: "Eduardo",
    test1: 10,
    test2: 8,
  },
  {
    name: "Júlia",
    test1: 7,
    test2: 5,
  },
  {
    name: "Roberto",
    test1: 9,
    test2: 7,
  },
  {
    name: "Amanda",
    test1: 3,
    test2: 6,
  },
]

function average(test1, test2) {
  return ((test1 + test2) /2).toFixed(2)
}

for (let student of students) {
  if (average(student.test1, student.test2) >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${average(student.test1, student.test2)}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso! `)
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${average(student.test1, student.test2)}
    Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}